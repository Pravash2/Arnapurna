import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";
import { Linking } from "expo";
import { getPhoneNo } from "../../actions/auth";
import { connect } from "react-redux";

import OTPInputView from "@twotalltotems/react-native-otp-input";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center"
  },
  input: {
    height: 40,
    backgroundColor: "rgba(255,255,255,0.4)",
    marginBottom: 10,
    paddingLeft: 10,
    color: "#fff",
    width: 300
  },
  buttonContainer: {
    backgroundColor: "#27ae60",
    paddingVertical: 5,
    paddingHorizontal: 20,
    width: 300
  },
  buttonText: {
    fontSize: 20,
    textAlign: "center",
    color: "#fff"
  },
  signup: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15
  },
  signupButton: {
    fontSize: 12,
    color: "#fff",
    textDecorationLine: "underline"
  }
});
class MyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone_number: ""
    };
  }
  state = {
    otp: "221198"
  };
  componentDidUpdate() {
    if (
      this.props.auth &&
      this.props.auth.isPhoneExit &&
      this.props.auth.isPhoneExit.exists &&
      this.props.auth.isPhoneExit.exists != true
    ) {
      console.log("ello");
    }
  }
  handleOTPChange = otp => {
    console.log(otp);
    this.setState({ otp });
  };

  clearOTP = () => {
    this.setState({ otp: undefined });
  };

  render(props) {
    if (
      this.props.auth &&
      this.props.auth.isPhoneExit &&
      this.props.auth.isPhoneExit.exists == false
    ) {
      this.props.navigation.navigate("OTP");
    }
    this.props.navigation.navigate("OTP");
    4;

    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Mobile No"
          keyboardType="numeric"
          onChangeText={e => this.setState({ phone_number: e })}
          style={styles.input}
        />

        {this.props.auth &&
        this.props.auth.isPhoneExit &&
        this.props.auth.isPhoneExit.exists ? (
          this.props.auth.isPhoneExit.exists == true ? (
            <View>
              <TextInput
                placeholder="Password"
                secureTextEntry={true}
                style={styles.input}
              />
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Home")}
                style={styles.buttonContainer}
              >
                <Text style={styles.buttonText}>Submit</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View>{this.props.navigation.navigate("Home")}</View>
          )
        ) : (
          <View>
            <TouchableOpacity
              onPress={() =>
                this.props.getPhoneNo({ phone_number: this.state.phone_number })
              }
              style={styles.buttonContainer}
            >
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, {
  getPhoneNo
})(MyForm);
