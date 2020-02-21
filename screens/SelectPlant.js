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
      <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate("Disease_Detection", {
                plant: "corn"
              })
            }
            style={styles.innerContainer}
          >
            <Image
              style={styles.imageHolder}
              source={require("../assets/plants/corn.png")}
            />
            <Text style={styles.title}>Cron</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate("Disease_Detection", {
                plant: "potato"
              })
            }
            style={styles.innerContainer}
          >
            <Image
              style={styles.imageHolder}
              source={require("../assets/plants/potato.png")}
            />
            <Text style={styles.title}>Potato</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate("Disease_Detection", {
                plant: "rice"
              })
            }
            style={styles.innerContainer}
          >
            <Image
              style={styles.imageHolder}
              source={require("../assets/plants/rice.png")}
            />
            <Text style={styles.title}>Rice</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate("Disease_Detection", {
                plant: "tomato"
              })
            }
            style={styles.innerContainer}
          >
            <Image
              style={styles.imageHolder}
              source={require("../assets/plants/tomato.png")}
            />
            <Text style={styles.title}>Tomato</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => console.log("Item under constustion")}
            style={styles.innerContainer}
          >
            <Image
              style={styles.imageHolder}
              source={require("../assets/plants/maize.png")}
            />
            <Text style={styles.title}>Maize</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => console.log("Item under constustion")}
            style={styles.innerContainer}
          >
            <Image
              style={styles.imageHolder}
              source={require("../assets/plants/sugarcane.png")}
            />
            <Text style={styles.title}>Sugar Cane</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#282830",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%"
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
    margin: 20,
    width: 150,
    padding: 5,
    backgroundColor: "#fff",
    borderRadius: 10
  },

  text2: {
    fontSize: 20,
    textAlign: "center",
    color: "#fff",
    marginBottom: 20,
    letterSpacing: 2
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    backgroundColor: "#3F51B5",
    color: "#fff",
    textTransform: "uppercase",
    borderRadius: 5
  }
});

Home.navigationOptions = {
  title: "Select Your Plant"
};
