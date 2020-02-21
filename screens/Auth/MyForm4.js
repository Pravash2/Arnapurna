import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView
} from "react-native";
import key from "../../key";
import axios from "axios";

class MyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      userName: "",
      MobNo: "",
      password: "",
      farmer_plot_no: "",
      farmer_street: "",
      farmer_place: "",
      farmer_city: "",
      farmer_state: "",
      farmer_country: "",
      farmer_gender: ""
    };
  }

  userRegistation = () => {
    this.props.navigation.navigate("MainScreen");
    // console.log("Registation Initiated");
    // axios
    //   .post(`${key.url}/farmers/`, {
    //     name: this.state.fullName,
    //     contact_no: this.state.MobNo,
    //     acc: {
    //       username: this.state.userName,
    //       password: this.state.password
    //     }
    //   })
    //   .then(res => this.props.navigation.navigate("OTP", { data: res.data }))
    //   .catch(err => console.log(err));
  };
  render(props) {
    return (
      <View style={styles.container}>
        <TextInput
          onChangeText={fullName => this.setState({ fullName })}
          placeholder="Full Name"
          style={styles.input}
        />
        <TextInput
          onChangeText={userName => this.setState({ userName })}
          placeholder="Username"
          style={styles.input}
        />
        <TextInput
          onChangeText={MobNo => this.setState({ MobNo })}
          placeholder="Mob No"
          style={styles.input}
        />
        <TextInput
          onChangeText={password => this.setState({ password })}
          placeholder="Password"
          secureTextEntry={true}
          style={styles.input}
        />
        <TextInput
          onChangeText={farmer_plot_no => this.setState({ farmer_plot_no })}
          placeholder="Plot No"
          secureTextEntry={true}
          style={styles.input}
        />
        <TextInput
          onChangeText={farmer_street => this.setState({ farmer_street })}
          placeholder="Street Name"
          secureTextEntry={true}
          style={styles.input}
        />
        <TextInput
          onChangeText={farmer_place => this.setState({ farmer_place })}
          placeholder="Farmer Place"
          secureTextEntry={true}
          style={styles.input}
        />
        <TextInput
          onChangeText={farmer_city => this.setState({ farmer_city })}
          placeholder="Farmer City"
          secureTextEntry={true}
          style={styles.input}
        />
        <TextInput
          onChangeText={farmer_state => this.setState({ farmer_state })}
          placeholder="State"
          secureTextEntry={true}
          style={styles.input}
        />
        <TextInput
          onChangeText={farmer_country => this.setState({ farmer_country })}
          placeholder="Country"
          secureTextEntry={true}
          style={styles.input}
        />
        <TouchableOpacity
          onPress={this.userRegistation}
          style={styles.buttonContainer}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <View style={styles.signup}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("ForgotPassword")}
          >
            <Text style={styles.signupButton}>Forgot Your Password ?</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Login")}
          >
            <Text style={styles.signupButton}>Already User? Sign In</Text>
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
    fontSize: 12,
    color: "#fff",
    textDecorationLine: "underline"
  }
});
