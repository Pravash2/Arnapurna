import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  KeyboardAvoidingView,
  ScrollView
} from "react-native";
import SignUpForm from "./MyForm3";

class Login extends Component {
  render(props) {
    const { params } = this.props.navigation.state;
    console.log(params);
    return (
      <ScrollView>
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <View style={styles.logoContainer}>
            <Image
              style={styles.logo}
              source={require("../../assets/logo.png")}
            />
            <Text style={styles.title}>Registation of {params.user}</Text>
          </View>
          <View style={styles.myform}>
            <SignUpForm navigation={this.props.navigation} />
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
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
    marginTop: 50,
    width: 50,
    height: 60
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
