import React, { Component } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { Button, Input } from "react-native-elements";
import { View } from "react-native";

export class SigninForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "a",
      password: "a"
    };
  }

  render() {
    return (
      <View>
        <Input
          placeholder="Enter Email here"
          leftIcon={<Icon name="user" size={24} color="black" />}
          value={this.state.email}
          onChangeText={text => this.setState({ email: text })}
          name="email"
          label="Email"
        />
        <Input
          placeholder="Enter Password here"
          value={this.state.password}
          onChangeText={text => this.setState({ password: text })}
          name="password"
          label="Password"
          leftIcon={<Icon name="lock" size={24} color="black" />}
        />
        <Button
          title="Sign In"
          onPress={() => this.props.submit(this.state)}
          type="solid"
          containerStyle={{
            width: "90%",
            margin: 10
          }}
        />
      </View>
    );
  }
}
