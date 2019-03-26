import React, { Component } from "react";
import styles from "../../styles";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { referFriendEmail, getEmails } from "../actions/emailActions";
import { Text, View, TextInput, Image, TouchableOpacity } from "react-native";
import uuid from "uuid";
import axios from "axios";

class ReferForms extends Component {
  componentDidMount() {
    this.props.getEmails();
  }

  state = {
    friendEmail: ""
  };

  sendFriendEmail = () => {
    const id = uuid.v4();
    const emailData = {
      id: id,
      uid: this.props.user.uid,
      username: this.props.user.username,
      email: this.props.user.email,
      friendEmail: this.state.friendEmail
    };
    this.props.referFriendEmail(emailData);
    this.setState({ friendEmail: "" });
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.border}
          value={this.state.friendEmail}
          onChangeText={friendEmail => this.setState({ friendEmail })}
          placeholder="Friend Email"
          autoCapitalize="none"
        />

        <TouchableOpacity
          style={[styles.button, styles.mb20]}
          onPress={this.sendFriendEmail}
        >
          <Text>Refer Friend</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ referFriendEmail, getEmails }, dispatch);
};

const mapStateToProps = state => {
  return {
    email: state.email,
    post: state.post,
    user: state.user
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReferForms);
