import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import { ListItem } from "react-native-elements";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { getUser } from "../actions/authActions";
import { getPosts } from "../actions/postActions";

import styles from "../../styles";

class Posts extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  handlePress = post => {
    this.props.navigation.navigate("Post", post);
  };

  render() {
    const { posts } = this.props.post;
    return (
      <ScrollView>
        {posts.map((post, i) => (
          <ListItem
            key={i}
            title={post.title}
            onPress={() => this.handlePress(post)}
          />
        ))}
      </ScrollView>
    );
  }
}

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  getUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  post: state.post
});

export default connect(
  mapStateToProps,
  { getUser, getPosts }
)(Posts);
