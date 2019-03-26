import React, { Component } from "react";
import firebase from "firebase";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { View, Text, Button } from "react-native";
import { getUser } from "../actions/authActions";
import styles from "../../styles";

class Home extends Component {
  logoutUser = () => {
    firebase.auth().signOut();
    this.props.navigation.navigate("Login");
  };

  render() {
    const { auth } = this.props;

    return (
      <View style={styles.container}>
        <Text>Home</Text>
        <Text>Hello {auth.username}</Text>
        <Button title="Logout" onPress={this.logoutUser} />
      </View>
    );
  }
}

Home.propTypes = {
  getUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getUser }
)(Home);
