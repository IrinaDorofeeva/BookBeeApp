import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }
  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }
  onButtonPress() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }
  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }
    return (
      <Button onPress={this.onButtonPress.bind(this)}>
      Sign In
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
      <CardSection style={{backgroundColor: '#e0a64b', borderColor: '#f0d6ad', borderBottomWidth: 2 }}>
      <Input
      secureTextEntry
      label="Password"
      placeholder="•••••••••••"
      onChangeText={this.onPasswordChange.bind(this)}
      value={this.props.password}
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
  const { email, password, error, loading } = auth;
  return { email, password, error, loading };
};
export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
