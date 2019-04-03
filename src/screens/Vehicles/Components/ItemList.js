import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  Button
} from "react-native";
import { withNavigation } from "react-navigation";

function ItemList(props) {
  goToCar = () => {
    this.props.navigation.navigate("Vehicle");
  };

  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <View style={styles.category}>
          <Text style={styles.categoryText}>{props.category}</Text>
        </View>
        <View style={styles.right}>
          <Text style={styles.make}>
            {props.make} {props.model} {props.year}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  genre: {
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "black",
    paddingVertical: 5,
    paddingHorizontal: 7
  },
  genreText: {
    color: "white",
    fontSize: 11
  },
  cover: {
    height: 150,
    width: 100,
    resizeMode: "contain"
  },
  right: {
    paddingLeft: 10,
    justifyContent: "space-between"
  },
  title: {
    fontSize: 18,
    color: "#44546b"
  },
  year: {
    backgroundColor: "#70b124",
    paddingVertical: 4,
    paddingHorizontal: 6,
    color: "white",
    fontSize: 11,
    borderRadius: 5,
    overflow: "hidden",
    alignSelf: "flex-start"
  },
  rating: {
    color: "#6b6b6b",
    fontSize: 14,
    fontWeight: "bold"
  }
});

export default withNavigation(ItemList);
