import React from "react";
import SwitchNavigator from "./src/navigation/SwitchNavigator.js";
import { Provider } from "react-redux";

import firebase from "./src/config/firebase";
import store from "./src/store";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <SwitchNavigator />
      </Provider>
    );
  }
}
export default App;
