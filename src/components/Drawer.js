import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  BackHandler
} from "react-native";
import { NavigationActions } from "react-navigation";
import Colors from "../navigation/res/Colors";

export default class DrawerContainer extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.chuckProfileContainer}
          onPress={() => this.props.navigation.navigate("Profile")}
        >
          <Image
            style={styles.chuckAvatar}
            source={require("../navigation/res/img/chuck.jpg")}
          />
          <Text style={styles.chuckName}>Chuck Norris Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.exitContainer}
          onPress={() => BackHandler.exitApp()}
        >
          <Text style={styles.exitText}>Exit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary
  },
  chuckProfileContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 15,
    paddingLeft: 15,
    paddingTop: 25,
    paddingBottom: 25,
    marginBottom: 3,
    backgroundColor: Colors.primaryLight
  },
  chuckName: {
    marginTop: 10,
    color: "white"
  },

  chuckAvatar: {
    height: 180,
    width: 180,
    borderRadius: 90,
    borderWidth: 3,
    borderColor: Colors.primary,
    margin: 10
  },
  exitText: {
    color: "white"
  },
  exitContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: Colors.primaryLight
  }
});
