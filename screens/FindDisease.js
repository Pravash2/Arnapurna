import React, { Component } from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import * as Progress from "react-native-progress";
import axios from "axios";
import key from "../key";

class FindDisease extends Component {
  state = {
    counter: 0,
    isLoading: true
  };
  componentDidMount() {
    var timer = setInterval(() => {
      this.setState({ counter: this.state.counter + 0.1 });
    }, 1000);
    setTimeout(() => {
      clearInterval(timer);
      this.setState({ isLoading: false });
    }, 11000);
  }
  renderSolution() {
    const disease = Object.entries(this.props.navigation.state.params.data)
      .filter(
        i =>
          i[0] !== "id" &&
          i[0] !== "image" &&
          i[0] !== "user" &&
          i[0] !== "contact_no" &&
          i[0] !== "farmer_id" &&
          i[0] !== "name" &&
          i[0] !== "when" &&
          i[0] !== "verified"
      )
      .sort((a, b) => (a[1] > b[1] ? -1 : 1))[0][0]
      .split("_")
      .join(" ");

    axios
      .post(
        `${key.url}/api/v1/${this.props.navigation.state.params.plant}/help/`,
        {
          disease
        }
      )

      .then(res =>
        this.props.navigation.navigate("InstantSolution", {
          data: res.data,
          disease,
          disease
        })
      )
      .catch(err => console.log(err));
  }

  render() {
    const { params } = this.props.navigation.state;
    console.log(params.plant);
    if (this.state.isLoading && !params.data) {
      return (
        <View style={styles.container}>
          <Progress.Bar progress={this.state.counter} width={200} />
          <Text style={styles.text}>Please Wait Your Image Processing</Text>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <Text style={styles.text1}>Analysis Result</Text>
        <View style={styles.box}>
          <FlatList
            data={Object.entries(params.data)
              .filter(
                i =>
                  i[0] !== "id" &&
                  i[0] !== "image" &&
                  i[0] !== "user" &&
                  i[0] !== "contact_no" &&
                  i[0] !== "farmer_id" &&
                  i[0] !== "name" &&
                  i[0] !== "when" &&
                  i[0] !== "verified"
              )
              .sort((a, b) => (a[1] > b[1] ? -1 : 1))}
            keyExtractor={(item, i) => i}
            renderItem={({ item }) => (
              <View>
                <Text style={styles.text2}>
                  {item[0].split("_").join(" ")} :{" "}
                  {Math.round(item[1] * 100) / 100}%
                </Text>
              </View>
            )}
          />
        </View>
        <View style={{ marginTop: 40 }}>
          <View style={{ marginBottom: 20 }}>
            <Button
              onPress={() => this.renderSolution()}
              title="Ask For Instance Support"
            ></Button>
          </View>
          <Button
            onPress={() =>
              this.props.navigation.navigate("PostQuery", {
                data: this.props.navigation.state.params.data
              })
            }
            title="Ask The Community"
          ></Button>
        </View>
      </View>
    );
  }
}
export default FindDisease;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 15,
    marginTop: 20
  },
  button: {
    margin: 40
  },
  text1: {
    fontSize: 30,
    marginBottom: 30
  },
  text2: {
    fontSize: 25,
    marginTop: 10,
    color: "#fff"
  },
  button: {
    backgroundColor: "#27ae60"
  },
  box: {
    backgroundColor: "gray",
    padding: 20,
    height: 300
  }
});
FindDisease.navigationOptions = {
  title: "Result"
};
