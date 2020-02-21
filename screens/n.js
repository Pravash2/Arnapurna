import React, { Component } from "react";
import {
  Text,
  View,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity
} from "react-native";

export default class Home extends Component {
  render(props) {
    let photo = this.props.navigation.getParam("photo", "empty");
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("SelectPlant")}
          style={styles.innerContainer}
        >
          <Image
            style={styles.imageHolder}
            source={require("../assets/search_plant.png")}
          />
          <Button
            title="Detect Plant Disease"
            style={styles.button}
            onPress={() => this.props.navigation.navigate("SelectPlant")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Crop_Prediction")}
          style={styles.innerContainer}
        >
          <Image
            style={styles.imageHolder}
            source={require("../assets/prediction_icon.png")}
          />
          <Button
            title="Crop Prediction"
            style={styles.button}
            onPress={() => this.props.navigation.navigate("Home")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Crop_Suggestion")}
          style={styles.innerContainer}
        >
          <Image
            style={styles.imageHolder}
            source={require("../assets/Consultant.png")}
          />
          <Button
            title="Yield Prediction"
            style={styles.button}
            onPress={() => this.props.navigation.navigate("Home")}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#282830"
  },
  imageHolder: {
    alignSelf: "center"
  },
  button: {
    margin: 20,
    marginTop: 20,
    width: 200
  },
  imageHolder: {
    alignSelf: "center",
    height: 100,
    width: 100,
    margin: 10
  },
  innerContainer: {
    marginTop: 20,
    width: 250,
    padding: 5,
    backgroundColor: "#fff"
  },

  text2: {
    fontSize: 20,
    textAlign: "center",
    color: "#fff",
    marginBottom: 20,
    letterSpacing: 2
  }
});
