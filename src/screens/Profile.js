import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import firebase from "firebase";

class Profile extends Component {
  logoutUser = () => {
    firebase.auth().signOut();
    this.props.navigation.navigate("Login");
  };
  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.logoutUser}>
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Profile;
