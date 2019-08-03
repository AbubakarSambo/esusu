/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import FlashMessage from "react-native-flash-message";
import Navigator from "./navigator";
import configureStore from "./configure";
const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Provider store={store}>
          <Navigator />
        </Provider>
        <FlashMessage duration={4000} position="top" />
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
