import React, { Component } from "react";
import { View, Text, Dimensions, Image, StyleSheet } from "react-native";
import { withNavigation } from "react-navigation";

class Vehicle extends Component {
  static navigationOptions = ({ navigation }) => {
    const carTitle = `${navigation.getParam("make")} ${navigation.getParam(
      "model"
    )} ${navigation.getParam("year")}`;
    return {
      title: carTitle.toLocaleUpperCase()
    };
  };

  render() {
    const item = this.props.navigation.state.params;

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
            <Text style={styles.categoryText}>{item.category}</Text>
          </View>
          <View style={styles.right}>
            <Text style={styles.make}>
              {item.make} {item.model} {item.year}
            </Text>
          </View>
        </View>
        <View styles={styles.pricing}>
          <Text styles={styles.pricingText}>Starting</Text>
        </View>
      </View>
    );
  }
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
  },
  pricingText: {
    fontSize: 40
  },
  pricing: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    color: "red"
  }
});
export default Vehicle;
