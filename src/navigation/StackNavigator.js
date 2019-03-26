import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createStackNavigator, createAppContainer } from "react-navigation";

import HomeScreen from "../screens/Home";
import PostsScreen from "../screens/Posts";
import PostScreen from "../screens/Post";
import ReferScreen from "../screens/Refer";
import ReferFormScreen from "../screens/ReferForm";

export const HomeNavigator = createAppContainer(
  createStackNavigator({
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: "Home"
      }
    }
  })
);

export const PostsNavigator = createAppContainer(
  createStackNavigator({
    Posts: {
      screen: PostsScreen,
      navigationOptions: {
        title: "Posts"
      }
    },
    Post: {
      screen: PostScreen,
      navigationOptions: {
        title: "Post"
      }
    }
  })
);

export const ReferNavigator = createAppContainer(
  createStackNavigator({
    Refer: {
      screen: ReferScreen,
      navigationOptions: {
        title: "Refer a Friend"
      }
    },
    ReferForm: {
      screen: ReferFormScreen,
      navigationOptions: {
        title: "Refer Form"
      }
    }
  })
);
