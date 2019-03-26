import React, { Component } from "react";
import { View, Text, Button, TextInput, TouchableOpacity } from "react-native";
import styles from "../../styles";
import firebase from "firebase";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { signup } from "../actions/authActions";

class Signup extends Component {
  state = {
    email: "",
    password: "",
    username: "",
    bio: ""
  };

  signpUser = () => {
    const signupData = {
      email: this.state.email,
      password: this.state.password,
      username: this.state.username,
      bio: this.state.bio
    };
    this.props.signup(signupData);
    this.props.navigation.navigate("Home");
  };
  render() {
    return (
      <View style={styles.containerLogin}>
        <TextInput
          style={styles.border}
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
          placeholder="Email"
          autoCapitalize="none"
          placeholderTextColor="#d3d3d3"
        />
        <TextInput
          style={styles.border}
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
          placeholder="Password"
          autoCapitalize="none"
          secureTextEntry={true}
          placeholderTextColor="#d3d3d3"
        />
        <TextInput
          style={styles.border}
          value={this.state.username}
          onChangeText={username => this.setState({ username })}
          placeholder="Username"
          autoCapitalize="none"
          placeholderTextColor="#d3d3d3"
        />
        <TextInput
          style={styles.border}
          value={this.state.bio}
          onChangeText={bio => this.setState({ bio })}
          placeholder="Something cool about you"
          autoCapitalize="none"
          placeholderTextColor="#d3d3d3"
        />

        <TouchableOpacity
          style={[styles.LoginButton, styles.mb20]}
          onPress={this.signpUser}
        >
          <Text style={styles.buttonWhiteText}>Sign up</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ signup }, dispatch);
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
