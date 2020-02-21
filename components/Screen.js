import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet, // CSS-like styles
  Text, // Renders text
  View,
  Dimensions,
  Image // Container component
} from "react-native";

import Icon from "react-native-vector-icons/Ionicons";
import { StackNavigator } from "react-navigation";
import Login from "../screens/Auth/Login";

import Swiper from "./Swiper";

export default class Screen extends Component {
  render() {
    return (
      <Swiper navigation={this.props.navigation}>
        {/* First screen */}
        <View style={styles.slide}>
          <Image
            style={{ width: 250, height: 250 }}
            source={require("../assets/images/AppIcon-A1.2.png")}
          />
          <Text style={styles.header}>Disease Detection</Text>
          <Text style={styles.text}>
            Find Disease of Crop by Deep Learning Algorithm
          </Text>
        </View>
        {/* Second screen */}
        <View style={styles.slide}>
          <Image
            style={{ width: 220, height: 220 }}
            source={require("../assets/images/Artificial_Intelligence_in_Agriculture_-_Flat_Style-06-512.png")}
          />
          <Text style={styles.header}>Crop Suggestion</Text>
          <Text style={styles.text}>
            Get appropriate crop for your land by sensor parameters
          </Text>
        </View>
        {/* Third screen */}
        <View style={styles.slide}>
          <Image
            style={{ width: 250, height: 250 }}
            source={require("../assets/images/364-3643852_earlier-seeding-icon.png")}
          />
          <Text style={styles.header}>Yield Prediction</Text>
          <Text style={styles.text}>
            Find Quantity of your Crop by Using analytical Method
          </Text>
        </View>
      </Swiper>
    );
  }
}
const iconStyles = {
  size: 100,
  color: "#ccc"
};
const styles = StyleSheet.create({
  // Slide styles
  slide: {
    flex: 1, // Take up all screen
    justifyContent: "center", // Center vertically
    alignItems: "center", // Center horizontally
    backgroundColor: "#282830"
  },
  // Header styles
  header: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 25,
    marginBottom: 15,
    textTransform: "uppercase"
  },
  // Text below header
  text: {
    color: "#fff",
    fontSize: 15,
    marginHorizontal: 40,
    textAlign: "center",
    width: 250
  }
});
AppRegistry.registerComponent("Screen", () => Screen);
