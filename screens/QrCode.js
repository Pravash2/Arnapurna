import * as React from "react";
import { View, StyleSheet, Button } from "react-native";
import { Container, Header, Content, List, ListItem, Text } from "native-base";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";

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
      return (
        <Container>
          <Content>
            <List>
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
