import React, { Component } from "react";
import firebase from "firebase";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { View, Text, Button, StyleSheet } from "react-native";
import { getUser } from "../../../actions/authActions";
import { getQuotes, getMyQuotes } from "../../../actions/vehicleActions";
import Category from "../Components/Category";
// import console = require("console");

class Home extends Component {
  componentDidMount() {
    this.props.getQuotes();

    firebase.auth().onAuthStateChanged(auth => {
      if (auth) {
        this.props.getMyQuotes(auth.uid);
      }
    });
  }

  state = {
    categories: [
      {
        id: 1,
        category: "cars"
      },
      {
        id: 2,
        category: "suvs"
      },
      {
        id: 3,
        category: "hatchback"
      }
    ]
  };
  render() {
    return (
      <View style={styles.container}>
        <Category categories={this.state.categories} />
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
  { getUser, getQuotes, getMyQuotes }
)(Home);
