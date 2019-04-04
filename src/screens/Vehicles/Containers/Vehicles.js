import React, { Component } from "react";
import firebase from "firebase";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { View, Text, Button, StyleSheet } from "react-native";
import { getUser } from "../../../actions/authActions";
import List from "../Components/List";
import HorizontalCategory from "../Components/HorizontalCategory";
class Vehicles extends Component {
  state = {
    list: [
      {
        id: 1,
        make: "kia",
        model: "soul",
        year: "2019",
        price: 17490,
        category: "suv",
        front:
          "https://www.kia.com/us/k3/content/media/mediabin/vehicle/overview/CMS/vehicles/soul/2020/overview/overview_mtf_soul_2020--original.png",
        gallery:
          "https://www.kia.com/us/k3/content/media/mediabin/vehicle/gallery/CMS/vehicles/soul/2020/gallery/exterior/gallery_soul_2020_exterior_9--kia-1280x-jpg.jpg",
        cylinders: 4,
        maxPower: 256,
        transmissionType: "Automatic",
        doors: 4,
        feCity: 12,
        feHwy: 10,
        feMixed: 11,
        versions: [
          {
            id: 0,
            version: "lx",
            img:
              "https://www.kia.com/content/dam/kwcms/mx/es/images/showroom/soul_2020/Componente-Soul-LX.png",

            features: [
              "6 bolsas de aire",
              "rines de aleación",
              "pantalla de audio",
              "camara",
              "toma de usb"
            ]
          },
          {
            id: 1,
            version: "ex",
            img:
              "https://www.kia.com/content/dam/kwcms/mx/es/images/showroom/soul_2020/Componente-Sou-EX.png",

            features: [
              "7 bolsas de aire",
              "rines de aleación",
              "pantalla de audio",
              "camara",
              "toma de usb"
            ]
          },
          {
            id: 2,
            version: "ex pack",
            img:
              "https://www.kia.com/content/dam/kwcms/mx/es/images/showroom/soul_2020/Componente-Soul-EX-Pack.png",

            features: [
              "8 bolsas de aire",
              "rines de aleación",
              "pantalla de audio",
              "camara",
              "toma de usb"
            ]
          }
        ]
      },
      {
        id: 2,
        make: "kia",
        model: "niro",
        year: "2019",
        price: 23490,
        category: "suv",
        front:
          "https://www.kia.com/us/k3/content/media/mediabin/vehicle/overview/CMS/vehicles/niro/2019/overview/overview_mtf_niro_2019--original.png",
        gallery:
          "https://www.kia.com/content/dam/kwcms/mx/es/images/showroom/new_sportage/2019/Galeria/EXT/Detail_images/desktop/galeia_exterior_kia_sportage_w_6.jpg",
        cylinders: 4,
        maxPower: 256,
        transmissionType: "Automatic",
        doors: 4,
        feCity: 12,
        feHwy: 10,
        feMixed: 11,
        versions: [
          {
            id: 0,
            version: "lx",
            img:
              "https://www.kia.com/content/dam/kwcms/mx/es/images/showroom/niro/2018_B/Trim_List/Componente-niro-lx.png",

            features: [
              "6 bolsas de aire",
              "rines de aleación",
              "pantalla de audio",
              "camara",
              "toma de usb"
            ]
          },
          {
            id: 1,
            version: "ex",
            img:
              "https://www.kia.com/content/dam/kwcms/mx/es/images/showroom/niro/2018_B/Trim_List/Componente-niro-ex.png",

            features: [
              "7 bolsas de aire",
              "rines de aleación",
              "pantalla de audio",
              "camara",
              "toma de usb"
            ]
          }
        ]
      },
      {
        id: 3,
        make: "kia",
        model: "Sportage",
        year: "2019",
        price: 23750,
        category: "suv",
        front:
          "https://www.kia.com/us/k3/content/media/mediabin/vehicle/overview/CMS/vehicles/sportage/2019/overview/overview_mtf_sportage_2019--original.png",
        gallery:
          "https://www.kia.com/content/dam/kwcms/mx/es/images/showroom/new_sportage/2019/Galeria/EXT/Detail_images/desktop/galeia_exterior_kia_sportage_w_6.jpg",
        cylinders: 4,
        maxPower: 256,
        transmissionType: "Automatic",
        doors: 4,
        feCity: 12,
        feHwy: 10,
        feMixed: 11,
        versions: [
          {
            id: 0,
            version: "lx",
            img:
              "https://www.kia.com/content/dam/kwcms/mx/es/images/showroom/new_sportage/2019/Componente-LX_PearlBlack.png",

            features: [
              "6 bolsas de aire",
              "rines de aleación",
              "pantalla de audio",
              "camara",
              "toma de usb"
            ]
          },
          {
            id: 1,
            version: "ex",
            img:
              "https://www.kia.com/content/dam/kwcms/mx/es/images/showroom/new_sportage/2019/Componente-EX_CoolSIlver.png",

            features: [
              "7 bolsas de aire",
              "rines de aleación",
              "pantalla de audio",
              "camara",
              "toma de usb"
            ]
          },
          {
            id: 2,
            version: "ex pack",
            img:
              "https://www.kia.com/content/dam/kwcms/mx/es/images/showroom/new_sportage/2019/Componente-EX_Pack_DarkGray.png",

            features: [
              "8 bolsas de aire",
              "rines de aleación",
              "pantalla de audio",
              "camara",
              "toma de usb"
            ]
          },
          {
            id: 3,
            version: "sxl awd",
            img:
              "https://www.kia.com/content/dam/kwcms/mx/es/images/showroom/new_sportage/2019/Componente-SXL_AWD_SparkingSilver.png",

            features: [
              "8 bolsas de aire",
              "rines de aleación",
              "pantalla de audio",
              "camara",
              "toma de usb"
            ]
          }
        ]
      }
    ]
  };

  logoutUser = () => {
    firebase.auth().signOut();
    this.props.navigation.navigate("Login");
  };

  render() {
    return (
      <View style={styles.container}>
        <List list={this.state.list} />
        {/* <Text>Vehicles</Text> */}
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

Vehicles.propTypes = {
  getUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getUser }
)(Vehicles);
