import React, { Component } from "react";
import Colors from "../navigation/res/Colors";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  BackHandler
} from "react-native";

class CardItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.props.onPress}>
        <View style={styles.container}>
          <Text style={styles.content}>{this.props.joke}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "white",
    alignSelf: "stretch",
    marginBottom: 3
  },
  content: {
    color: Colors.primary,
    fontSize: 15
  }
});

export default CardItem;
