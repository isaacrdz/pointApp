import React, { Component } from "react";
import { View, Text, Dimensions, Image, StyleSheet } from "react-native";
import SegmentedControlTab from "react-native-segmented-control-tab";

class Vehicle extends Component {
  state = {
    selectedIndex: 0,
    selectedIndices: [0],
    customStyleIndex: 0
  };

  handleCustomIndexSelect = index => {
    this.setState(prevState => ({ ...prevState, customStyleIndex: index }));
  };

  static navigationOptions = ({ navigation }) => {
    const carTitle = ` ${navigation.getParam("model")} ${navigation.getParam(
      "year"
    )}`;
    return {
      title: carTitle.toUpperCase()
    };
  };

  render() {
    const item = this.props.navigation.state.params;

    const { customStyleIndex } = this.state;
    return (
      <View>
        <SegmentedControlTab
          values={["OVERVIEW", "SPECS", "VERSIONS"]}
          selectedIndex={customStyleIndex}
          onTabPress={this.handleCustomIndexSelect}
          borderRadius={0}
          tabsContainerStyle={{ height: 30, backgroundColor: "#F2F2F2" }}
          tabStyle={{
            backgroundColor: "white",
            borderWidth: 0,
            borderColor: "transparent"
          }}
          activeTabStyle={{
            backgroundColor: "white",
            marginTop: 2,
            borderBottomColor: "#c4172b",
            borderTopColor: "transparent",
            borderWidth: 1
          }}
          tabTextStyle={{ color: "#444444" }}
          activeTabTextStyle={{ color: "black" }}
        />
        {customStyleIndex === 0 && (
          <View>
            <Image
              style={styles.cover}
              source={{
                uri: item.gallery
              }}
            />
          </View>
        )}
        {customStyleIndex === 1 && (
          <Text style={styles.tabContent}> Tab Two</Text>
        )}
        {customStyleIndex === 2 && (
          <Text style={styles.tabContent}> Tab Three</Text>
        )}
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
