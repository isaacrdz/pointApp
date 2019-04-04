import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  Button,
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import Layout from "./Layout";
import ItemList from "./ItemList";
import Empty from "./Empty";
import Separator from "./Separator";
import { withNavigation } from "react-navigation";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0
});

class List extends Component {
  renderItemList = ({ item }) => {
    return <ItemList {...item} />;
  };
  renderEmpty = () => <Empty text="There are no elements on this list" />;
  itemSeparator = () => <Separator />;
  keyExtractor = item => item.id.toString();

  render() {
    return (
      <Layout title="Cars">
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.props.list}
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={({ item }) => (
            <View style={styles.container}>
              <View style={styles.left}>
                <Image
                  style={styles.cover}
                  source={{
                    uri: item.front
                  }}
                />
              </View>
              <View style={styles.right}>
                <Text style={styles.carTitle}>
                  {item.model} {item.year}
                </Text>
                <Text style={styles.pricing}>
                  Starting{" "}
                  <Text style={styles.pricingDigit}>
                    {formatter.format(item.price)}*
                  </Text>
                </Text>
                <TouchableOpacity
                  style={[styles.exploreButton, styles.mb20]}
                  onPress={() =>
                    this.props.navigation.navigate("Vehicle", item)
                  }
                >
                  <Text style={styles.buttonWhiteText}>Explore</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </Layout>
    );
  }
}

const styles = StyleSheet.create({
  buttonWhiteText: {
    color: "white"
  },
  mb20: {
    marginBottom: 20
  },
  exploreButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 10,
    alignItems: "center",
    borderColor: "#c4172b",
    backgroundColor: "#c4172b",
    borderWidth: 1,
    borderRadius: 5,
    width: 130,
    height: 40
  },
  pricingDigit: {
    fontSize: 18,
    fontWeight: "bold"
  },
  carTitle: {
    fontSize: 22,
    textTransform: "capitalize",
    marginTop: 15,
    fontWeight: "bold"
  },
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
    height: 210,
    width: 210,
    resizeMode: "contain",
    marginLeft: 5
  },
  right: {
    paddingLeft: 20
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
export default withNavigation(List);
