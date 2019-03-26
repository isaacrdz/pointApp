import React, { Component } from "react";
import { View, Text } from "react-native";
import { Image } from "react-native-elements";

import styles from "../../styles";

class Post extends Component {
  render() {
    const post = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <Text>{post.title}</Text>
        <Text>{post.id}</Text>
      </View>
    );
  }
}

export default Post;
