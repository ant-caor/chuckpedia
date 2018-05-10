import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { Provider, connect } from "react-redux";
import store from "./src/state/store";
import Root from "./src/Root";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
}
