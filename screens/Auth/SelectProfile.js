import React, { Component } from "react";
import {
  Text,
  View,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from "react-native";

export default class Home extends Component {
  render(props) {
    let photo = this.props.navigation.getParam("photo", "empty");
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate("SignUp", { user: "farmer" })
          }
          style={styles.innerContainer}
        >
          <Image
            style={styles.imageHolder}
            source={require("../../assets/images/farmer2.png")}
          />
          <Button
            title="Farmer Registation"
            style={styles.button}
            onPress={() =>
              this.props.navigation.navigate("SignUp", { user: "farmer" })
            }
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate("SignUp", { user: "expert" })
          }
          style={styles.innerContainer}
        >
          <Image
            style={styles.imageHolder}
            source={require("../../assets/images/expert2.png")}
          />
          <Button
            title="Apply For Experts"
            style={styles.button}
            onPress={() =>
              this.props.navigation.navigate("SignUp", { user: "expert" })
            }
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate("SignUp", { user: "other" })
          }
          style={styles.innerContainer}
        >
          <Image
            style={styles.imageHolder}
            source={require("../../assets/images/other.jpg")}
          />
          <Button
            title="Other Registation"
            style={styles.button}
            onPress={() =>
              this.props.navigation.navigate("Yield_Prediction", {
                user: "other"
              })
            }
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#282830"
  },
  imageHolder: {
    alignSelf: "center"
  },
  button: {
    margin: 20,
    marginTop: 20,
    width: 200
  },
  imageHolder: {
    alignSelf: "center",
    height: 100,
    width: 100,
    margin: 10
  },
  innerContainer: {
    marginTop: 20,
    width: 250,
    padding: 5,
    backgroundColor: "#fff"
  },

  text2: {
    fontSize: 20,
    textAlign: "center",
    color: "#fff",
    marginBottom: 20,
    letterSpacing: 2
  }
});

Home.navigationOptions = {
  title: "Home"
};
