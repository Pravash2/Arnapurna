import * as React from "react";
import { View, StyleSheet, Button } from "react-native";
import { Container, Header, Content, List, ListItem, Text } from "native-base";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import key from "../key";
import { BarCodeScanner } from "expo-barcode-scanner";

export default class BarcodeScannerExample extends React.Component {
  state = {
    hasCameraPermission: null,
    scanned: false,
    dataa: ""
  };

  async componentDidMount() {
    this.getPermissionsAsync();
  }

  getPermissionsAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === "granted"
    });
  };

  render() {
    const { hasCameraPermission, scanned } = this.state;

    if (hasCameraPermission === null) {
      return <Text> Requesting for camera permission </Text>;
    }
    if (hasCameraPermission === false) {
      return <Text> No access to camera </Text>;
    }
    if (this.state.dataa) {
      axios
        .post(`${key.url}/api/v1/weed-detection/`, body, {
          headers: {
            "content-type": "multipart/form-data"
          }
        })

        .then(res =>
          this.props.navigation.navigate("Weed_Find", {
            data: res.data
          })
        )
        .catch(err => console.log(err));
    }
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "flex-end"
        }}
      >
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
        {scanned && (
          <Button
            title={"Tap to Scan Again"}
            onPress={() =>
              this.setState({
                scanned: false
              })
            }
          />
        )}
      </View>
    );
  }

  handleBarCodeScanned = ({ type, data }) => {
    this.setState({
      scanned: true,
      dataa: data
    });
  };
}

BarcodeScannerExample.navigationOptions = {
  title: "Scan And See Your Result"
};
