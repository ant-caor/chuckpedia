import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
  Image
} from "react-native";
import { connect } from "react-redux";
import { RootStack } from "./navigation/router";

class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <RootStack />;
  }
}

export default Root;
