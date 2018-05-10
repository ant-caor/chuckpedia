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

class Profile extends Component {
  render() {
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
          <Text style={styles.title}>Profile</Text>
        </View>
        <ScrollView style={styles.container}>
          <ImageBackground
            style={styles.cover}
            source={require("../res/img/angryChuck.jpg")}
          >
            <Text style={styles.coverTitle}>
              Carlos Ray Norris (Chuck Norris)
            </Text>
          </ImageBackground>
          <Text style={styles.description}>{description.text}</Text>
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
    backgroundColor: Colors.primaryLight
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
  description: {
    color: "white",
    padding: 10,
    marginBottom: 85
  }
});

const description = {
  text:
    "Carlos Ray Norris (born March 10, 1940) is an American martial artist, actor, film producer and screenwriter. After serving in the United States Air Force, he competed as a martial artist who won many championships, and has since founded his own school of fighting, Chun Kuk Do. Norris is also a black belt in Brazilian jiu jitsu and Judo. Norris appeared in a number of action films, such as Way of the Dragon, in which he starred alongside Bruce Lee, Good Guys Wear Black, The Octagon, Lone Wolf McQuade, Code of Silence, the Missing in Action trilogy, and The Delta Force. He was The Cannon Group's leading star in the 1980s.[4][5] He played the title role in the television series Walker, Texas Ranger from 1993 until 2001. Since 1997, he and model Christie Brinkley have been the main spokespersons for the Total Gym infomercials. Norris has written several books, with subject matter varying from martial arts, exercise, philosophy, politics, Christian religion, western novels, to biography. He was twice a New York Times best-selling author, firstly was with his book on his personal philosophy of positive force and the psychology of self-improvement based on personal anecdotes called The Secret of Inner Strength: My Story (1988). His second New York Times Best Seller, Black Belt Patriotism: How to Reawaken America (2008), was about his critique on current issues in the USA. He also writes a column for the conservative website WorldNetDaily. In 2005, Norris became an internet star with the comical Chuck Norris facts, which documents fictional and often absurd feats associated with him. With this new found popularity he was hired to endorse many products that incorporated Chuck Norris facts in their commercials. This phenomenon also spanned six books, two of them New York Times Best Sellers, and two video games."
};
export default Profile;
