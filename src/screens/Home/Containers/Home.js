import React, { Component } from "react";
import firebase from "firebase";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { View, Text, Button, StyleSheet } from "react-native";
import { getUser } from "../../../actions/authActions";
import List from "../Components/List";

class Home extends Component {
  state = {
    list: [
      {
        id: 1,
        make: "kia",
        model: "sportage",
        year: "2019",
        price: 23750,
        category: "suv"
      },
      {
        id: 2,
        make: "kia",
        model: "forte",
        year: "2019",
        price: 17790,
        category: "car"
      },
      {
        id: 3,
        make: "kia",
        model: "rio",
        year: "2019",
        price: 15390,
        category: "car"
      },
      {
        id: 4,
        make: "kia",
        model: "soul",
        year: "2019",
        price: 17490,
        category: "suv"
      }
    ]
  };
  logoutUser = () => {
    firebase.auth().signOut();
    this.props.navigation.navigate("Login");
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Logout" onPress={this.logoutUser} />

        <List list={this.state.list} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});

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
