import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { emailChanged, passwordReset } from '../actions';

class ResetForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }
  onButtonPress() {
    const { email } = this.props;
    this.props.passwordReset({ email });
  }
  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }
    return (
      <Button onPress={this.onButtonPress.bind(this)}>
      Reset Password
      </Button>
    );
  }
  render() {
    return (
      <Card>
      <CardSection style={{backgroundColor: '#e0a64b', borderColor: '#f0d6ad', borderBottomWidth: 2  }}>
      <Input
      label="Email"
      placeholder="some@example.com"
      onChangeText={this.onEmailChange.bind(this)}
      value={this.props.email}
      />
      </CardSection>

      <Text style={styles.errorTextStyle}>
      {this.props.error}
      </Text>
      <CardSection style={{backgroundColor: '#e0a64b', paddingTop: 10}}>
      {this.renderButton()}
      </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 18,
    alignSelf: 'center',
    color: 'white',
    paddingTop: 5
  }
};

const mapStateToProps = ({ auth }) => {
  const { email, error, loading } = auth;
  return { email, error, loading };
};
export default connect(mapStateToProps, { emailChanged, passwordReset })(ResetForm);
