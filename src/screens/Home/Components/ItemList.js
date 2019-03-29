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
        <Image
          style={styles.cover}
          source={{
            uri:
              "https://www.leithcars.com/assets/shared/CustomHTMLFiles/Responsive/MRP/Kia/2019/Forte/images/2019-Kia-Forte-01.jpg"
          }}
        />
        <View style={styles.category}>
          <Text style={styles.categoryText}>{props.category}</Text>
        </View>
        <View style={styles.right}>
          <Text style={styles.make}>
            {props.make} {props.model} {props.year}
          </Text>
        </View>
      </View>
      <Button title="Detail" onPress={this.goToCar} />
    </View>
  );
}

const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  cover: {
    height: 250,
    width: width
  },
  category: {
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "black",
    paddingVertical: 5,
    paddingHorizontal: 7
  },
  categoryText: {
    color: "white",
    fontSize: 20
  },
  right: {
    position: "absolute",
    right: 0,
    bottom: 0,
    backgroundColor: "black",
    paddingVertical: 5,
    paddingHorizontal: 7
  },
  make: {
    color: "white",
    textTransform: "capitalize",
    fontSize: 18,
    fontWeight: "bold"
  },
  model: {
    color: "white"
  }
});

export default withNavigation(ItemList);
