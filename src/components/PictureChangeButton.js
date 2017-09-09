import React, { Component } from 'react'
import firebase from 'firebase'
import { pictureSet, pictureLoading } from '../actions';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  Image,
  ActivityIndicator
} from 'react-native'
import ImagePicker from 'react-native-image-picker'
import RNFetchBlob from 'react-native-fetch-blob'

const Blob = RNFetchBlob.polyfill.Blob
const fs = RNFetchBlob.fs
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
window.Blob = Blob

const uploadImage = (uri, mime = 'application/octet-stream') => {
  return new Promise((resolve, reject) => {
    const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri
    const sessionId = new Date().getTime()
    let uploadBlob = null
    const imageRef = firebase.storage().ref('images').child(`${sessionId}`)

    fs.readFile(uploadUri, 'base64')
      .then((data) => {
        return Blob.build(data, { type: `${mime};BASE64` })
      })
      .then((blob) => {
        uploadBlob = blob
        console.log('storage write')
        return imageRef.put(blob, { contentType: mime })
      })
      .then(() => {
        uploadBlob.close()
        return imageRef.getDownloadURL()
      })
      .then((url) => {
        resolve(url)
      })
      .catch((error) => {
        reject(error)
    })
  })
}


class PictureChangeButton extends Component {
  _pickImage() {
    this.props.pictureLoading();
    ImagePicker.launchImageLibrary({}, response  => {
      uploadImage(response.uri)
        .then(url =>
           {
           this.props.pictureSet({picture: url});
         })
        .catch()
    })
  }
  render() {
    return (
      <View style={ styles.container }>
        <TouchableOpacity onPress={ () => {this._pickImage()} }>
          <Text style={ styles.upload }>
           Change Picture
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    height: 200,
    width: 200,
    resizeMode: 'cover',
    borderRadius: 100,
  },
  upload: {
    textAlign: 'center',
    color: '#dfa553',
    padding: 5,
    marginTop: 3,
    marginBottom: -13,
    borderWidth: 1,
    borderRadius: 14,
    borderColor: '#dfa553'
  },
})
const mapStateToProps = (state) => {
const { picture } = state.pictureState;
return { picture };
};
export default connect(mapStateToProps, { pictureSet, pictureLoading })(PictureChangeButton);
