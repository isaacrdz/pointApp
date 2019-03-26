import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/FontAwesome";

import {
  HomeNavigator,
  PostsNavigator,
  ReferNavigator
} from "./StackNavigator";

import { createBottomTabNavigator, createAppContainer } from "react-navigation";

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeNavigator,
    navigationOptions: {
      tabBarLabel: "Home",
      tabBarIcon: () => (
        <Icon name="home" type="font-awesome" color="#232323" size={28} />
      )
    }
  },
  Posts: {
    screen: PostsNavigator,
    navigationOptions: {
      tabBarLabel: "Posts",
      tabBarIcon: () => (
        <Icon name="list" type="font-awesome" color="#232323" size={28} />
      )
    }
  },
  Refer: {
    screen: ReferNavigator,
    navigationOptions: {
      tabBarLabel: "Refer a Friend",
      tabBarIcon: () => (
        <Icon name="heart" type="font-awesome" color="#232323" size={28} />
      )
    }
  }
});

export default createAppContainer(TabNavigator);
