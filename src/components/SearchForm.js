import React, { Component } from 'react';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import { ProfileCard, ProfileCardSection, SearchCardSection, InputSearch, ChatButton, Spinner } from './common';
import { searchTextChanged, searchStarts, emptySearch } from '../actions';

class SearchForm extends Component {


  componentWillMount() {
    this.props.emptySearch();
  }

  onSearchTextChange(text) {
    this.props.searchTextChanged(text);
  }

  onButtonPress() {
    const { searchText} = this.props;
    this.props.searchStarts({ searchText });
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }
    return (
      <ChatButton onPress={this.onButtonPress.bind(this)}>
      Search
      </ChatButton>
    );
  }

  renderSearchResults() {
    const { currentUser } = firebase.auth();
    var ReadersViews = [];
      if(currentUser){

        firebase.database().ref(`/users_search/${currentUser.uid}`)
        .on('value', snapshot => {

if(snapshot.exists()){
      console.log('**results**');
      console.log(Object.values(snapshot.val()));
      ReadersViews = Object.values(snapshot.val());
}
  } );
}
return ReadersViews;
}

  render() {
    return (
      <View>
      <ProfileCard>
      <ProfileCardSection>
      <InputSearch
      label="Find book readers of your interest:"
      placeholder="Some Book Title, Topic or Author"
      onChangeText={this.onSearchTextChange.bind(this)}
      value={this.props.searchText}
      />

      <Text style={styles.errorTextStyle}>
      {this.props.error}
      </Text>

      </ProfileCardSection>

      <SearchCardSection style={{backgroundColor: '#fff', paddingTop: 10, borderWidth: 0}}>
      {this.renderButton()}
      </SearchCardSection>

      </ProfileCard>

  
      </View>

    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 18,
    alignSelf: 'center',
    color: '#e0a64b',
    paddingTop: 5
  },

  labelTextStyle: {
    fontSize: 18,
    alignSelf: 'center',
    color: '#e0a64b',
    paddingTop: 5
  }
};


const mapStateToProps = ({ search }) => {
  const { searchText, error, loading } = search;
  return { searchText, error, loading };
};
export default connect(mapStateToProps, { searchTextChanged, searchStarts, emptySearch })(SearchForm);
