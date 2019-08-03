import React, { Component } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { Button, Input } from "react-native-elements";
import { View } from "react-native";

export class CreateGroupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Flexi",
      address: "25 Ibadan",
      amount: "5000"
    };
  }

  render() {
    return (
      <View>
        <Input
          placeholder="Enter Name here"
          leftIcon={<Icon name="user" size={24} color="black" />}
          value={this.state.name}
          onChangeText={text => this.setState({ name: text })}
          name="name"
          label="Name"
        />
        <Input
          placeholder="Enter Address here"
          value={this.state.address}
          onChangeText={text => this.setState({ address: text })}
          name="address"
          label="Address"
          leftIcon={<Icon name="lock" size={24} color="black" />}
        />
        <Input
          placeholder="Enter Amount here"
          value={this.state.amount}
          onChangeText={text => this.setState({ amount: text })}
          name="amount"
          label="Amount"
          leftIcon={<Icon name="lock" size={24} color="black" />}
        />
        <Button
          title="Create Group"
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
