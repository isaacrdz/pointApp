import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome";
import firebase from "firebase";

import HomeScreen from "../screens/Home/Containers/Home";
import PostsScreen from "../screens/Posts";
import PostScreen from "../screens/Post";
// import ReferScreen from "../screens/Refer";
// import ReferFormScreen from "../screens/ReferForm";
import VehiclesScreen from "../screens/Vehicles/Containers/Vehicles";
import VehicleScreen from "../screens/Vehicles/Containers/Vehicle";
import ItemListScreen from "../screens/Vehicles/Components/ItemList";
import ProfileScreen from "../screens/Profile";

logout = () => {
  alert("TODO: Log out");
};

export const HomeNavigator = createAppContainer(
  createStackNavigator({
    Home: {
      screen: HomeScreen,
      navigationOptions: ({ navigation }) => ({
        headerTitle: (
          <Image
            style={{ width: 100, height: 35, marginBottom: 10 }}
            source={require("../../assets/logo-kia.png")}
          />
        ),
        headerLeft: (
          <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            <Icon
              style={{ marginLeft: 15 }}
              name="user"
              type="font-awesome"
              color="#232323"
              size={28}
            />
          </TouchableOpacity>
        ),
        headerRight: (
          <TouchableOpacity onPress={this.logout}>
            <Icon
              style={{ marginRight: 15 }}
              name="sign-out"
              type="font-awesome"
              color="#232323"
              size={28}
            />
          </TouchableOpacity>
        )
      })
    },

    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        title: "Profile"
      }
    }
    // ItemList: {
    //   screen: ItemListScreen,
    //   navigationOptions: {
    //     title: "Item List"
    //   }
    // }
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

export const VehiclesNavigator = createAppContainer(
  createStackNavigator({
    Vehicles: {
      screen: VehiclesScreen,
      navigationOptions: ({ navigation }) => ({
        headerTitle: (
          <Image
            style={{ width: 100, height: 35, marginBottom: 10 }}
            source={require("../../assets/logo-kia.png")}
          />
        ),
        headerLeft: (
          <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            <Icon
              style={{ marginLeft: 15 }}
              name="user"
              type="font-awesome"
              color="#232323"
              size={28}
            />
          </TouchableOpacity>
        ),
        headerRight: (
          <TouchableOpacity onPress={this.logout}>
            <Icon
              style={{ marginRight: 15 }}
              name="sign-out"
              type="font-awesome"
              color="#232323"
              size={28}
            />
          </TouchableOpacity>
        )
      })
    },
    ItemList: {
      screen: ItemListScreen,
      navigationOptions: {
        title: "Item List"
      }
    },
    Vehicle: {
      screen: VehicleScreen,
      navigationOptions: {
        title: "Item List"
      }
    }
  })
);
