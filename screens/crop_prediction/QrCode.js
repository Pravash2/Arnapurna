import * as React from "react";
import { View, StyleSheet } from "react-native";
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Text,
  Button
} from "native-base";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import * as Font from "expo-font";
import { BarCodeScanner } from "expo-barcode-scanner";
import axios from "axios";

export default class BarcodeScannerExample extends React.Component {
  state = {
    hasCameraPermission: null,
    scanned: false,
    dataa: "{}",
    loading: true
  };

  async componentWillMount() {
    this.getPermissionsAsync();
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/Ionicons.ttf")
    });
    this.setState({ loading: false });
  }

  getPermissionsAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === "granted"
    });
  };
  uploadPhoto = photo => {
    console.log("upload photo initiated");

    axios
      .post(
        `http://172.29.6.251:8080/api/v1/corn-predict/?ph_value=6.4&temp_val=23&humidity_val=75&rainfall_val=678&moisture_val=95`
      )
      .then(res =>
        this.props.navigation.navigate("Crop_Find", {
          data: res.data
        })
      )
      .catch(err => console.log(err));
  };

  render() {
    const { hasCameraPermission, scanned } = this.state;
    if (this.state.loading) {
      return <View></View>;
    }
    if (hasCameraPermission === null) {
      return <Text> Requesting for camera permission </Text>;
    }
    if (hasCameraPermission === false) {
      return <Text> No access to camera </Text>;
    }
    if (this.state.dataa) {
      return (
        <Container>
          <Content>
            <List
              style={{
                width: "90%",
                marginTop: 20,
                marginLeft: "auto",
                marginRight: "auto"
              }}
            >
              <ListItem itemDivider>
                <Text>Phosphorus {JSON.parse(this.state.dataa).phos} </Text>
              </ListItem>
              <ListItem>
                <Text>Soil Moisture {JSON.parse(this.state.dataa).mois}</Text>
              </ListItem>

              <ListItem itemDivider>
                <Text>Nitrogen {JSON.parse(this.state.dataa).nitro} </Text>
              </ListItem>
              <ListItem>
                <Text>Temerature {JSON.parse(this.state.dataa).temp}</Text>
              </ListItem>
              <ListItem itemDivider>
                <Text>Turbidity {JSON.parse(this.state.dataa).tubi}</Text>
              </ListItem>
              <ListItem>
                <Text>Humidity {JSON.parse(this.state.dataa).humi}</Text>
              </ListItem>

              <ListItem itemDivider>
                <Text>TDS {JSON.parse(this.state.dataa).tds}</Text>
              </ListItem>
              <ListItem>
                <Text>PH {JSON.parse(this.state.dataa).ph}</Text>
              </ListItem>
              <ListItem itemDivider>
                <Text>Potassium {JSON.parse(this.state.dataa).pota} %</Text>
              </ListItem>
            </List>
            <Button
              full
              style={{
                width: "70%",
                marginTop: 20,
                marginLeft: "auto",
                marginRight: "auto"
              }}
              onPress={() => this.uploadPhoto()}
            >
              <Text style={{ textAlign: "center" }}>
                Upload Data for Crop Prediction
              </Text>
            </Button>
          </Content>
        </Container>
      );
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
            onPress={() =>
              this.setState({
                scanned: false
              })
            }
          >
            <Text>Tap to Scan Again</Text>
          </Button>
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
