import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  KeyboardAvoidingView,
  TouchableOpacity
} from "react-native";
import Myform from "./MyForm2";

class Login extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../../assets/logo1.jpg")}
          />
          <Text style={styles.title}>Welcome to Annapurna</Text>
        </View>
        <View style={styles.myform}>
          <Myform navigation={this.props.navigation} />
        </View>
      </KeyboardAvoidingView>
    );
  }
}
export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#282830",
    width: Dimensions.get("window").width
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 10
  },
  myform: {
    flex: 2
  }
});
