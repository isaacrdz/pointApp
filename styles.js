import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get("window");

export default (styles = StyleSheet.create({
  containerLogin: {
    flex: 1,
    backgroundColor: "#34445d",
    alignItems: "center",
    justifyContent: "center"
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  mb20: {
    marginBottom: 20
  },
  avatarSize: {
    height: 300,
    width: width
  },
  border: {
    width: "85%",
    margin: 10,
    padding: 15,
    fontSize: 16,
    borderColor: "#d3d3d3",
    borderBottomWidth: 1,
    textAlign: "center",
    color: "#d3d3d3"
  },
  button: {
    marginTop: 20,
    paddingVertical: 10,
    alignItems: "center",
    borderColor: "#d3d3d3",
    borderWidth: 1,
    borderRadius: 5,
    width: 200
  },
  LoginButton: {
    marginTop: 20,
    paddingVertical: 10,
    alignItems: "center",
    borderColor: "#44adff",
    backgroundColor: "#44adff",
    borderWidth: 1,
    borderRadius: 5,
    width: 350,
    height: 50
  },
  buttonWhiteText: {
    color: "#ffffff",
    fontSize: 20,
    textTransform: "uppercase"
  },
  textWhite: {
    color: "#ffffff"
  },
  textBold: {
    fontWeight: "bold"
  }
}));
