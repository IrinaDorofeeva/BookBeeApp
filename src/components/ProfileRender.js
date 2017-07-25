import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { Card, CardSection } from './common';
import { connect } from 'react-redux';
import {profileFetch} from '../actions';


class ProfileRender extends Component {

  componentWillMount(){
    this.props.profileFetch();
  }

  renderProfile(){
    if (this.props.profile){

        return (<Text>{this.props.profile.name}</Text>);
    }
  }

  render() {
    return (
      <Card>
      <CardSection>
      <Text>
      Here is your profile.
      </Text>
      </CardSection>

      <CardSection>
      {this.renderProfile()}
      </CardSection>
      </Card>
    );
  }
}
const mapStateToProps = state => {
const profile = state.profile;

  return { profile };
};

export default connect(mapStateToProps, { profileFetch })(ProfileRender);
