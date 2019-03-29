import React, { Component } from "react";
import { View, Text, Button, TextInput, TouchableOpacity } from "react-native";
import styles from "../../styles";
import firebase from "firebase";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { signup } from "../actions/authActions";

class Reset extends Component {
  state = {
    email: ""
  };

  resetPassword = () => {
    const resetEmail = {
      email: this.state.email
    };
    firebase.auth().sendPasswordResetEmail(resetEmail.email);
    alert(`Email sent to ${resetEmail.email}`);
    this.props.navigation.navigate("Login");
    this.setState({ email: "" });
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

        <TouchableOpacity
          style={[styles.LoginButton, styles.mb20]}
          onPress={this.resetPassword}
        >
          <Text style={styles.buttonWhiteText}>Reset Password</Text>
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
)(Reset);
