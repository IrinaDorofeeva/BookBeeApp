import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { profileUpdate } from '../actions';
import { ProfileCardSection, InputProfile, ProfileCard } from './common';
import {Dimensions } from 'react-native';


class ProfileForm extends Component {
  render() {
    return (
      <ProfileCard>
      <ProfileCardSection>
      <InputProfile
      label="Name:"
      placeholder="Your name?"
      value={this.props.name}
      maxLength = {50}
      onChangeText={value => this.props.profileUpdate({ prop: 'name', value })}
      />
      </ProfileCardSection>

      <ProfileCardSection>
      <InputProfile
      label="Book:"
      placeholder="What book are you reading now?"
      value={this.props.book}
      maxLength = {50}
      onChangeText={value => this.props.profileUpdate({ prop: 'book', value })}
      />
      </ProfileCardSection>

      <ProfileCardSection>
      <InputProfile
      label="Author:"
      placeholder="Who wrote that book?"
      value={this.props.author}
      maxLength = {50}
      onChangeText={value => this.props.profileUpdate({ prop: 'author', value })}
      />
      </ProfileCardSection>

      <ProfileCardSection>
      <InputProfile
      label="Genre:"
      placeholder="What is the genre of the book?"
      value={this.props.genre}
      onChangeText={value => this.props.profileUpdate({ prop: 'genre', value })}
      />
      </ProfileCardSection>
      <View style={{  height: (Dimensions.get('window').width)/5  }}>
      <ProfileCardSection>
      <InputProfile
      label="About:"
      maxLength = {100}
      placeholder="What are your thoughts on the book?"
      value={this.props.about}
      onChangeText={value => this.props.profileUpdate({ prop: 'about', value })}
      />
      </ProfileCardSection>
      </View>
      </ProfileCard>
    );
  }
}

const mapStateToProps = (state) => {
const { name, book, author, genre, about } = state.profileForm;
return { name, book, author, genre, about };
};
export default connect(mapStateToProps, { profileUpdate })(ProfileForm);
