import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import * as Permissions from "expo-permissions";
import { Camera } from "expo-camera";
import { FontAwesome } from "@expo/vector-icons";

export default class CameraApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasCameraPermission: null,
      type: Camera.Constants.Type.back,
      isFlashLightOn: Camera.Constants.FlashMode.off
    };
  }
  static navigationOption = {
    title: "Camera"
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === "granted"
    });
  }

  flipCamera = () => {
    this.setState({
      type:
        this.state.type === Camera.Constants.Type.back
          ? Camera.Constants.Type.front
          : Camera.Constants.Type.back
    });
  };

  //Toggle Flash Light
  FlashLight = () => {
    this.setState({
      isFlashLightOn:
        this.state.isFlashLightOn === Camera.Constants.FlashMode.off
          ? Camera.Constants.FlashMode.on
          : Camera.Constants.FlashMode.off
    });
  };

  //takePicture and send that to home screen
  takePicture = async () => {
    if (this.camera) {
      const { params } = this.props.navigation.state;
      let photo = await this.camera.takePictureAsync();
      this.props.navigation.navigate("Weed_Upload", {
        photo: photo,
        plant: "ddd"
      });
    }
  };
  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission == -null) {
      return (
        <View>
          <Text>Null</Text>
        </View>
      );
    } else if (hasCameraPermission === false) {
      return (
        <View>
          <Text>No access to Camera</Text>
        </View>
      );
    } else if (hasCameraPermission === true) {
      return (
        <View style={styles.container}>
          <Camera
            style={styles.cameraView}
            type={this.state.type}
            flashMode={this.state.isFlashLightOn}
            ref={ref => {
              this.camera = ref;
            }}
          >
            <View style={styles.actionContainer}>
              <TouchableOpacity
                onPress={() => {
                  this.flipCamera();
                }}
                style={styles.iconHolder}
              >
                <FontAwesome name="camera" size={35} style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.takePicture();
                }}
                style={styles.iconHolder}
              >
                <FontAwesome name="circle" size={35} style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.FlashLight();
                }}
                style={styles.iconHolder}
              >
                <FontAwesome name="flash" size={35} style={styles.icon} />
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <Text> textInComponent </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cameraView: {
    flex: 1
  },
  iconHolder: {
    flex: 1
  },
  actionContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent"
  },
  iconHolder: {
    flex: 1,
    alignItems: "center",
    alignSelf: "flex-end"
  },
  icon: {
    marginBottom: 10,
    color: "#fff"
  }
});
CameraApp.navigationOptions = {
  title: "Pick Image"
};
