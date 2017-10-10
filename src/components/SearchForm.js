import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import { ProfileCard, ProfileCardSection, SearchCardSection, InputSearch, ChatButton, Spinner } from './common';
import { searchTextChanged, searchStarts } from '../actions';

class SearchForm extends Component {


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


  render() {
    return (
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
export default connect(mapStateToProps, { searchTextChanged, searchStarts })(SearchForm);
