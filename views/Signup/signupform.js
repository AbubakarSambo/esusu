import React, { Component } from 'react';
import { Button, Input } from 'react-native-elements';
import { View, StyleSheet } from 'react-native';


export class SignupForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: ''
    }
  }

  render() {
    return (
      <View>
        <Input
          placeholder="Enter First Name here"
          name="firstName"
          onChangeText={(text) => this.setState({ firstName: text })}
          value={this.state.firstName}
          label="First Name"
          type="text"
        />
        <Input
          placeholder="Enter Last Name here"
          onChangeText={(text) => this.setState({ lastName: text })}
          value={this.state.lastName}
          name="lastName"
          label="Last Name"
        />
        <Input
          placeholder="Enter Email here"
          value={this.state.email}
          onChangeText={(text) => this.setState({ email: text })}
          name="email"
          label="Email"
        />
        <Input
          placeholder="Enter Phone Number here"
          value={this.state.phone}
          onChangeText={(text) => this.setState({ phone: text })}
          name="phone"
          label="Phone"
        />
        <Input
          placeholder="Enter Password here"
          value={this.state.password}
          onChangeText={(text) => this.setState({ password: text })}
          name="password"
          label="Password"
          secureTextEntry
        />
        <Button
          title="Sign Up"
          onPress={() => this.props.submit(this.state)}
          type="solid"
          containerStyle={{
            width: '90%',
            margin: 10
          }}
        />

      </View>
    )
  }
}