import React, { Component } from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import OtpInputs from "react-native-otp-inputs";

export default class App extends Component {
  render() {
    return (
      <View
        style={{
          display: "flex",
          width: "80%",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 300,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text style={{ fontSize: 20 }}>Enter OTP</Text>
        <View style={{ flex: 1, marginTop: 50 }}>
          <OtpInputs
            handleChange={code => console.log(code)}
            numberOfInputs={4}
          />
        </View>
        <View style={{ marginTop: 100 }}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("SelectProfile")}
            style={{
              backgroundColor: "#27ae60",
              paddingVertical: 5,
              paddingHorizontal: 20,
              width: 200,
              borderRadius: 20
            }}
          >
            <Text style={{ fontSize: 20, textAlign: "center", color: "#fff" }}>
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
