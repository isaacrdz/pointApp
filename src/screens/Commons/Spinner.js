import React from "react";
import { View, ActivityIndicator } from "react-native";

function Spinner() {
  return (
    <View style={styles.spinnerStyles}>
      <ActivityIndicator size={size || "large"} />
    </View>
  );
}

const styles = {
  spinnerStyles: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
};
export default Spinner;
