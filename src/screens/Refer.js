import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";
import styles from "../../styles";

class Refer extends Component {
  goToRefer = () => {
    this.props.navigation.navigate("ReferForm");
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.mb20}>Refer</Text>
        <Button title="Refer now" type="outline" onPress={this.goToRefer} />
      </View>
    );
  }
}

export default Refer;
