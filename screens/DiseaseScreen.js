import React, { Component } from "react";
import {
  Text,
  View,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity
} from "react-native";

import axios from "axios";
import key from "../key";

export default class Home extends Component {
  static navigationOption = {
    title: "PhotoClicker"
  };

  uploadPhoto = photo => {
    console.log("upload photo initiated");
    let body = new FormData();
    body.append("image", {
      uri: photo.uri,
      name: "photo.jpg",
      filename: "imageName.jpg",
      type: "image/jpg"
    });
    body.append("Content-Type", "image/jpg");
    body.append("farmer_id", "f43b78c1-e401-4b41-b764-f4071e5e9e36");

    axios
      .post(
        `${key.url}/api/v1/${this.props.navigation.state.params.plant.plant}/`,
        body,
        {
          headers: {
            "content-type": "multipart/form-data"
          }
        }
      )

      .then(res =>
        this.props.navigation.navigate("FindDisease", {
          data: res.data,
          plant: this.props.navigation.state.params.plant.plant
        })
      )
      .catch(err => console.log(err));
  };
  render(props) {
    let photo = this.props.navigation.getParam("photo", "empty");
    console.log(this.props.navigation.state.params.plant.plant);
    return (
      <View style={styles.container}>
        <Image
          resizeMode="center"
          style={styles.imageHolder}
          source={photo === "empty" ? require("../assets/logo.png") : photo}
        />
        <TouchableOpacity
          style={styles.uploadButton}
          onPress={() => this.uploadPhoto(photo)}
        >
          <Text style={{ color: "#fff", fontSize: 17 }}>Upload Image</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  imageHolder: {
    alignSelf: "center",
    height: 300
  },
  button: {
    margin: 20,
    flexGrow: 2
  },
  imageHolder: {
    alignSelf: "center",
    height: 400,
    margin: 20
  },
  uploadButton: {
    backgroundColor: "#16a085",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5
  }
});
Home.navigationOptions = {
  title: "Upload Image For Disease Detection"
};
