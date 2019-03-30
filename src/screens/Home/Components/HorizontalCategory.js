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

class HorizontalCategory extends Component {
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
          horizontal={true}
          keyExtractor={this.keyExtractor}
          data={this.props.list}
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.container}
              onPress={() => this.props.navigation.navigate("Vehicle", item)}
            >
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
              </View>
            </TouchableOpacity>
          )}
        />
      </Layout>
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
  }
});
export default withNavigation(HorizontalCategory);
