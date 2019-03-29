import React, { Component } from "react";
import styles from "../../styles";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { referFriendEmail } from "../actions/emailActions";
import { Text, View, TextInput, Image, TouchableOpacity } from "react-native";
import uuid from "uuid";

class ReferForms extends Component {
  state = {
    friendEmail: ""
  };

  sendFriendEmail = () => {
    const id = uuid.v4();
    const emailData = {
      id: id,
      uid: this.props.auth.uid,
      username: this.props.auth.username,
      email: this.props.auth.email,
      friendEmail: this.state.friendEmail
    };
    this.props.referFriendEmail(emailData);
    this.setState({ friendEmail: "" });
    // console.log(emailData);
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

ReferForms.propTypes = {
  // getUser: PropTypes.func.isRequired,
  // auth: PropTypes.object.isRequired,
  // login: PropTypes.func.isRequired,
  referFriendEmail: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { referFriendEmail }
)(ReferForms);
