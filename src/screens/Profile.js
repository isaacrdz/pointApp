import React, { Component } from "react";
import firebase from "firebase";
import { PropTypes } from "prop-types";
import {
  View,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  StyleSheet
} from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { login, getUser } from "../actions/authActions";
import { Icon, Divider, Avatar } from "react-native-elements";

class Profile extends Component {
  logoutUser = () => {
    firebase.auth().signOut();
    this.props.navigation.navigate("Login");
  };
  render() {
    const { currentUser } = this.props.auth;
    return (
      <View>
        <View style={styles.infoContainer}>
          {/* <Avatar
            size="xlarge"
            rounded
            source={{
              uri: currentUser.profilePicture
            }}
            containerStyle={{ marginBottom: 30 }}
          /> */}
          <Text style={styles.username}>{currentUser.username}</Text>
          <Text style={styles.bio}>{currentUser.bio}</Text>

          <View style={styles.emailContainer}>
            <Icon
              size={17}
              name="envelope"
              type="font-awesome"
              color="#646364"
            />
            <Text style={styles.emailText}> {currentUser.email}</Text>
          </View>
          <TouchableOpacity style={styles.button} onPress={this.logoutUser}>
            <Text style={{ color: "red" }}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  emailText: {
    color: "#646364"
  },
  emailContainer: {
    flexDirection: "row"
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 70,
    marginBottom: 15
  },
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 5,
    paddingHorizontal: 5
  },
  username: {
    fontSize: 25,
    fontWeight: "bold",
    textTransform: "capitalize",
    color: "#646364",
    marginBottom: 10
  },
  bio: {
    color: "#646364",
    marginBottom: 20
  },
  infoContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20
  },
  button: {
    marginTop: 20,
    paddingVertical: 10,
    alignItems: "center",
    borderColor: "#d3d3d3",
    borderWidth: 1,
    borderRadius: 5,
    width: 200
  }
});

Profile.propTypes = {
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
)(Profile);
