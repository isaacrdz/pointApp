import React, { Component } from "react";
import {
  View,
  Text,
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/FontAwesome";
import { quoteRequest } from "../../../actions/vehicleActions";
import SegmentedControlTab from "react-native-segmented-control-tab";
import Versions from "../Components/Versions";
import uuid from "uuid";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0
});

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

  getAQuote = () => {
    const id = uuid.v4();
    const { currentUser } = this.props.auth;
    const { navigation } = this.props;
    const quote = {
      id: id,
      uid: currentUser.uid,
      user: currentUser.username,
      email: currentUser.email,
      make: navigation.getParam("make"),
      model: navigation.getParam("model"),
      year: navigation.getParam("year"),
      message: `Request a quote from ${navigation.getParam(
        "make"
      )} ${navigation.getParam("model")}${" "}${navigation.getParam("year")}`
    };
    this.props.quoteRequest(quote);
  };

  render() {
    const item = this.props.navigation.state.params;

    const { customStyleIndex } = this.state;
    return (
      <View style={styles.container}>
        <View>
          <Image
            style={styles.coverFront}
            source={{
              uri: item.front
            }}
          />

          <View style={styles.container}>
            <Text style={[styles.pricingText, styles.mb5]}>
              Starting MSRP{" "}
              <Text style={{ fontWeight: "bold" }}>
                {" "}
                {formatter.format(item.price)}*
              </Text>{" "}
            </Text>
            <TouchableOpacity
              style={[styles.quoteButton]}
              onPress={this.getAQuote}
            >
              <Text style={[styles.buttonWhiteText]}>GET A QUOTE</Text>
            </TouchableOpacity>
          </View>
        </View>
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
          <Text style={styles.tabContent}> Tab two</Text>
        )}
        {customStyleIndex === 2 && <Versions item={item} />}
      </View>
    );
  }
}

const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  buttonWhiteText: {
    color: "white",
    fontWeight: "bold"
  },
  coverFront: {
    height: 150,
    width: 250,
    resizeMode: "contain",
    marginLeft: 5,
    alignItems: "center",
    justifyContent: "center"
  },
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
    fontSize: 25,
    alignItems: "center",
    justifyContent: "center"
  },
  pricing: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    color: "red"
  },
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  mb20: {
    marginBottom: 20
  },
  mb5: {
    marginBottom: 5
  },
  quoteButton: {
    marginTop: 5,
    marginBottom: 20,
    paddingVertical: 10,
    paddingHorizontal: 10,
    alignItems: "center",
    borderColor: "#c4172b",
    backgroundColor: "#c4172b",
    borderWidth: 1,
    borderRadius: 5,
    width: 300,
    height: 40,
    color: "white"
  }
});
Vehicle.propTypes = {
  // getUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { quoteRequest }
)(Vehicle);
