import React, { Component } from "react";
import { PropTypes } from "prop-types";
import {
  View,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Image
} from "react-native";
import styles from "../../styles";
import firebase from "firebase";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { login, getUser } from "../actions/authActions";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input } from "react-native-elements";

class Login extends Component {
  state = {
    email: "",
    password: "",
    loading: false
  };

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(auth => {
      if (auth) {
        this.props.getUser(auth.uid);
        if (this.props.auth != null) {
          this.props.navigation.navigate("Home");
        }
      }
    });
  };

  loginUser = () => {
    const loginData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.login(loginData);

    // console.log(loginData);
  };

  goToSignup = () => {
    this.props.navigation.navigate("Signup");
  };

  goToResetPassword = () => {
    this.props.navigation.navigate("Reset");
  };

  renderButton() {
    if (this.state.loading) {
      return <ActivityIndicator size="small" />;
    }
    return (
      <Text title="Signup" style={styles.textWhite} onPress={this.goToSignup}>
        {" "}
        Sign up
      </Text>
    );
  }

  render() {
    return (
      <View style={styles.containerLogin}>
        <Image
          style={{ height: 200, width: 200 }}
          source={{
            uri:
              "https://cdn.freebiesupply.com/logos/large/2x/kia-logo-black-and-white.png"
          }}
        />
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
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor="#d3d3d3"
        />

        <TouchableOpacity
          style={[styles.LoginButton, styles.mb20]}
          onPress={this.loginUser}
        >
          <Text style={styles.buttonWhiteText}>Log in</Text>
        </TouchableOpacity>

        <Text style={[styles.textWhite, styles.mb20]}>
          Don't have an account?{" "}
          <Text
            title="Signup"
            style={[styles.textWhite, styles.textBold]}
            onPress={this.goToSignup}
          >
            Sign up
          </Text>
        </Text>
        <Text style={styles.textWhite} onPress={this.goToResetPassword}>
          Forgot your password?{" "}
        </Text>
      </View>
    );
  }
}

Login.propTypes = {
  getUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { login, getUser }
)(Login);
