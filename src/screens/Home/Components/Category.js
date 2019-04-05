import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
class Category extends Component {
  componentDidMount() {
    console.log(this.props.categories);
  }

  keyExtractor = item => item.id.toString();

  render() {
    return (
      <FlatList
        keyExtractor={this.keyExtractor}
        data={this.props.categories}
        // ListEmptyComponent={this.renderEmpty}
        // ItemSeparatorComponent={this.itemSeparator}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <Text>Category: {item.category}</Text>
          </View>
        )}
      />
    );
  }
}
export default Category;
