import React from "react";
import {
  createStackNavigator,
  createDrawerNavigator,
  DrawerActions
} from "react-navigation";
import Feed from "./screens/Feed";
import Joke from "./screens/Joke";
import Profile from "./screens/Profile";
import Colors from "./res/Colors";
import { Image, TouchableOpacity } from "react-native";
import Drawer from "../components/Drawer";

const DrawerStack = createDrawerNavigator(
  {
    Feed: {
      screen: Feed
    }
  },
  {
    contentComponent: Drawer
  }
);

const DrawerNavigation = createStackNavigator(
  {
    DrawerStack: {
      screen: DrawerStack
    }
  },
  {
    headerMode: "float",
    navigationOptions: ({ navigation }) => ({
      headerStyle: { backgroundColor: Colors.primary },
      headerTintColor: "white",
      title: "The Chuckpedia",
      headerLeft: drawerButton(navigation)
    })
  }
);

const drawerButton = navigation => (
  <TouchableOpacity
    onPress={() => {
      navigation.dispatch(DrawerActions.toggleDrawer());
    }}
  >
    <Image
      source={require("./res/img/baseline_menu_white_48dp.png")}
      style={{ width: 24, height: 24, marginLeft: 24 }}
    />
  </TouchableOpacity>
);

export const RootStack = createStackNavigator(
  {
    DrawerStack: {
      screen: DrawerNavigation
    },
    Joke: {
      screen: Joke
    },
    Profile: {
      screen: Profile
    }
  },
  {
    headerMode: "none",
    title: "Main",
    initialRouteName: "DrawerStack"
  }
);
