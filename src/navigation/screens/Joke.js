import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  BackHandler,
  ScrollView
} from "react-native";
import { NavigationActions } from "react-navigation";
import Colors from "../res/Colors";

class Joke extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { navigation } = this.props;
    const itemId = navigation.getParam("id", "NO-ID");
    const joke = navigation.getParam("joke", "Error getting joke.");

    return (
      <View style={styles.container}>
        <View style={styles.toolbar}>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.dispatch(NavigationActions.back())
            }
          >
            <Image
              style={styles.closeButton}
              source={require("../res/img/baseline_close_white_48dp.png")}
            />
          </TouchableOpacity>
          <Text style={styles.title}>Random joke</Text>
        </View>
        <ScrollView style={styles.container}>
          <ImageBackground
            style={styles.cover}
            source={require("../res/img/thinkerChuck.jpg")}
          >
            <Text style={styles.coverTitle}>
              Carlos Ray Norris (Chuck Norris)
            </Text>
          </ImageBackground>
          <Text style={styles.joke}>{JSON.stringify(joke)}</Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  toolbar: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    height: 52,
    backgroundColor: Colors.primary
  },
  closeButton: {
    width: 24,
    height: 24,
    marginLeft: 24,
    marginRight: 24
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18
  },
  container: {
    flexDirection: "column",
    backgroundColor: Colors.primaryLight,
    flex: 1
  },
  cover: {
    height: 300,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center"
  },
  coverTitle: {
    alignSelf: "stretch",
    textAlign: "center",
    backgroundColor: "rgba(86, 0, 39, 0.8)",
    color: Colors.primaryLight,
    fontSize: 18,
    fontWeight: "bold",
    paddingTop: 15,
    paddingBottom: 15
  },
  joke: {
    color: "white",
    fontSize: 18,
    padding: 10,
    marginBottom: 85
  }
});

export default Joke;
