import React, { Component } from "react";
import firebase from "firebase";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { View, Text, Button, StyleSheet } from "react-native";
import { getUser } from "../../../actions/authActions";
import List from "../Components/List";
import HorizontalCategory from "../Components/HorizontalCategory";
class Home extends Component {
  // state = {
  //   list: [
  //     {
  //       id: 1,
  //       make: "kia",
  //       model: "soul",
  //       year: "2019",
  //       price: 17490,
  //       category: "suv",
  //       front:
  //         "https://www.kia.com/us/k3/content/media/mediabin/vehicle/overview/CMS/vehicles/soul/2020/overview/overview_mtf_soul_2020--original.png",
  //       gallery:
  //         "https://www.kia.com/us/k3/content/media/mediabin/vehicle/gallery/CMS/vehicles/soul/2020/gallery/exterior/gallery_soul_2020_exterior_9--kia-1280x-jpg.jpg",
  //       cylinders: 4,
  //       maxPower: 256,
  //       transmissionType: "Automatic",
  //       doors: 4,
  //       feCity: 12,
  //       feHwy: 10,
  //       feMixed: 11
  //     },
  //     {
  //       id: 2,
  //       make: "kia",
  //       model: "niro",
  //       year: "2019",
  //       price: 23490,
  //       category: "suv",
  //       front:
  //         "https://www.kia.com/us/k3/content/media/mediabin/vehicle/overview/CMS/vehicles/niro/2019/overview/overview_mtf_niro_2019--original.png",
  //       gallery:
  //         "https://www.kia.com/content/dam/kwcms/mx/es/images/showroom/new_sportage/2019/Galeria/EXT/Detail_images/desktop/galeia_exterior_kia_sportage_w_6.jpg",
  //       cylinders: 4,
  //       maxPower: 256,
  //       transmissionType: "Automatic",
  //       doors: 4,
  //       feCity: 12,
  //       feHwy: 10,
  //       feMixed: 11
  //     },
  //     {
  //       id: 3,
  //       make: "kia",
  //       model: "Sportage",
  //       year: "2019",
  //       price: 23750,
  //       category: "suv",
  //       front:
  //         "https://www.kia.com/us/k3/content/media/mediabin/vehicle/overview/CMS/vehicles/sportage/2019/overview/overview_mtf_sportage_2019--original.png",
  //       gallery:
  //         "https://www.kia.com/content/dam/kwcms/mx/es/images/showroom/new_sportage/2019/Galeria/EXT/Detail_images/desktop/galeia_exterior_kia_sportage_w_6.jpg",
  //       cylinders: 4,
  //       maxPower: 256,
  //       transmissionType: "Automatic",
  //       doors: 4,
  //       feCity: 12,
  //       feHwy: 10,
  //       feMixed: 11
  //     }
  //   ]
  // };

  // logoutUser = () => {
  //   firebase.auth().signOut();
  //   this.props.navigation.navigate("Login");
  // };

  render() {
    return (
      <View style={styles.container}>
        {/* <List list={this.state.list} /> */}
        <Text>Home</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});

Home.propTypes = {
  getUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getUser }
)(Home);
