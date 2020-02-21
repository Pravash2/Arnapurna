import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";

class MyForm extends Component {
  constructor(props) {
    super(props);
  }
  render(props) {
    return (
      <View style={styles.container}>
        <TextInput placeholder="Mob No" style={styles.input} />

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Home")}
          style={styles.buttonContainer}
        >
          <Text style={styles.buttonText}>Send OTP</Text>
        </TouchableOpacity>
        <View style={styles.signup}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Login")}
          >
            <Text style={styles.signupButton}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("SignUp")}
          >
            <Text style={styles.signupButton}>New User? Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default MyForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
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
    paddingVertical: 5
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
    fontSize: 15,
    color: "#fff",
    textDecorationLine: "underline"
  }
});
