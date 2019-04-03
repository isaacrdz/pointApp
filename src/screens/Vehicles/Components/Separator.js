import React from "react";
import { View, StyleSheet } from "react-native";

function Separator(props) {
  return (
    <View
      style={[
        styles.separator,
        {
          borderColor: props.color ? props.color : "#eaeaea"
        }
      ]}
    />
  );
}

const styles = StyleSheet.create({
  separator: {
    borderWidth: 1,
    marginBottom: 10
  }
});
export default Separator;
