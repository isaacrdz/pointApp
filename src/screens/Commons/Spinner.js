import React from "react";
import { View, ActivityIndicator } from "react-native";

function Spinner({ size }) {
  return (
    <View style={styles.spinnerStyles}>
      <ActivityIndicator color="#fff" size={size || "large"} />
    </View>
  );
}

const styles = {
  spinnerStyles: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    backgroudColor: "white"
  }
};
export default Spinner;
