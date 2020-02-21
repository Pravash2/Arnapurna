import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ImageBackground
} from "react-native";
import { Button } from "native-base";

export default class Home extends Component {
  render(props) {
    let photo = this.props.navigation.getParam("photo", "empty");
    return (
      <ImageBackground
        source={require("../assets/bg1.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.container2}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("SelectPlant")}
                style={styles.innerContainer}
              >
                <Image
                  style={styles.imageHolder}
                  source={require("../assets/search_plant.png")}
                />
                <View style={styles.button2}>
                  <Text style={styles.title}>Plant Disease Detection</Text>
                  <Text style={styles.description}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Error a voluptatem perspiciatis sit dolorem
                  </Text>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate("SelectPlant")
                    }
                    style={styles.innerContainer2}
                  >
                    <Button style={styles.button}>
                      <Text style={styles.text}>Tutorial</Text>
                    </Button>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("QrCode")}
                style={styles.innerContainer}
              >
                <Image
                  style={styles.imageHolder}
                  source={require("../assets/prediction_icon.png")}
                />
                <View style={styles.button2}>
                  <Text style={styles.title}>Crop Suggestion</Text>
                  <Text style={styles.description}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Error a voluptatem perspiciatis sit dolorem
                  </Text>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate("SelectPlant")
                    }
                    style={styles.innerContainer2}
                  >
                    <Button style={styles.button}>
                      <Text style={styles.text}>Tutorial</Text>
                    </Button>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("SelectZone")}
                style={styles.innerContainer}
              >
                <Image
                  style={styles.imageHolder}
                  source={require("../assets/images/nutrition_icon.png")}
                />
                <View style={styles.button2}>
                  <Text style={styles.title}>Nutrition Recomendation</Text>
                  <Text style={styles.description}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Error a voluptatem perspiciatis sit dolorem
                  </Text>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate("SelectPlant")
                    }
                    style={styles.innerContainer2}
                  >
                    <Button style={styles.button}>
                      <Text style={styles.text}>Tutorial</Text>
                    </Button>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Weed_Detection")}
                style={styles.innerContainer}
              >
                <Image
                  style={styles.imageHolder}
                  source={require("../assets/images/weed2.png")}
                />
                <View style={styles.button2}>
                  <Text style={styles.title}>Weed Detection</Text>
                  <Text style={styles.description}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Error a voluptatem perspiciatis sit dolorem
                  </Text>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate("Weed_Detection")
                    }
                    style={styles.innerContainer2}
                  >
                    <Button style={styles.button}>
                      <Text style={styles.text}>Tutorial</Text>
                    </Button>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate("SeedLing_Detection")
                }
                style={styles.innerContainer}
              >
                <Image
                  style={styles.imageHolder}
                  source={require("../assets/images/seedling.png")}
                />
                <View style={styles.button2}>
                  <Text style={styles.title}>Seedling Identification</Text>
                  <Text style={styles.description}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Error a voluptatem perspiciatis sit dolorem
                  </Text>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate("SeedLing_Detection")
                    }
                    style={styles.innerContainer2}
                  >
                    <Button style={styles.button}>
                      <Text style={styles.text}>Tutorial</Text>
                    </Button>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate("Hidden_Detection")
                }
                style={styles.innerContainer}
              >
                <Image
                  style={styles.imageHolder}
                  source={require("../assets/images/weed.jpg")}
                />
                <View style={styles.button2}>
                  <Text style={styles.title}>Hidden Weed Identification</Text>
                  <Text style={styles.description}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Error a voluptatem perspiciatis sit dolorem
                  </Text>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate("SelectPlant")
                    }
                    style={styles.innerContainer2}
                  >
                    <Button style={styles.button}>
                      <Text style={styles.text}>Tutorial</Text>
                    </Button>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate("Yield_Prediction")
                }
                style={styles.innerContainer}
              >
                <Image
                  style={styles.imageHolder}
                  source={require("../assets/Consultant.png")}
                />
                <View style={styles.button2}>
                  <Text style={styles.title}>Yield Prediction</Text>
                  <Text style={styles.description}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Error a voluptatem perspiciatis sit dolorem
                  </Text>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate("SelectPlant")
                    }
                    style={styles.innerContainer2}
                  >
                    <Button style={styles.button}>
                      <Text style={styles.text}>Tutorial</Text>
                    </Button>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 100,
    paddingTop: 150,
    flexDirection: "row"
  },
  container2: {
    padding: 20
  },
  imageHolder: {
    alignSelf: "center"
  },
  button: {
    borderRadius: 10,
    textAlign: "center",
    height: 40,
    width: 100,
    justifyContent: "center"
  },
  imageHolder: {
    alignSelf: "center",
    height: 100,
    width: 100,
    margin: 10
  },
  innerContainer: {
    marginTop: 20,
    width: 350,
    padding: 5,
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "row",
    borderRadius: 20,
    justifyContent: "space-between"
  },
  innerContainer2: {
    width: 100,
    marginLeft: "auto",
    color: "#fff",
    textAlign: "center"
  },
  tutorial: {
    color: "#fff",
    textAlign: "left"
  },
  text2: {
    fontSize: 20,
    textAlign: "center",
    color: "#fff",
    marginBottom: 20,
    letterSpacing: 2
  },
  button2: {
    paddingRight: 10,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    width: 200
  },
  text: {
    color: "#fff",
    textAlign: "center",
    margin: "auto"
  },
  title: {
    width: "100%",
    fontSize: 17,
    textAlign: "left",
    fontWeight: "bold"
  },
  description: {
    textAlign: "justify"
  }
});

Home.navigationOptions = {
  headerShown: false
};
