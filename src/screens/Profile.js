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
import { Icon } from "react-native-elements";

class Profile extends Component {
  componentDidMount() {
    console.log(this.props.auth.currentUser.bio);
  }
  logoutUser = () => {
    firebase.auth().signOut();
    this.props.navigation.navigate("Login");
  };
  render() {
    const { currentUser } = this.props.auth;
    return (
      <View>
        <Image
          style={styles.profileImage}
          source={{
            uri:
              "https://d2x5ku95bkycr3.cloudfront.net/App_Themes/Common/images/profile/0_200.png"
          }}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.username}>{currentUser.username}</Text>
          <Text style={styles.bio}>{currentUser.bio}</Text>

          <View style={styles.emailContainer}>
            <Icon
              inverse
              name="envelope"
              type="font-awesome"
              color="#646364"
              // onPress={() => console.log("hello")}
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
    flex: 1,
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
    marginBottom: 10
  },
  infoContainer: {
    alignItems: "center",
    justifyContent: "center"
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
