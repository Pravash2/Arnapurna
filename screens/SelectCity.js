import React, { Component } from "react";
import { SafeAreaView } from "react-native";
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Text,
  Left,
  Body,
  Right,
  Title,
  Icon,
  Button
} from "native-base";
import * as Font from "expo-font";

import data from "../data/data.json";
import { ActivityIndicator, FlatList, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
export default class ListHeaderExample extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true, data: "", index: false, index2: "" };
  }

  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/Ionicons.ttf")
    });
    this.setState({ loading: false, data: data });
  }

  StateAndCity = data => {
    return data.map(da => {
      <ListItem itemHeader first>
        <Text>{da.state}</Text>
      </ListItem>;
    });
  };

  showDistrict = () => {
    return (
      <FlatList
        data={
          this.state.data.states.filter(
            item => item.state === this.state.index2
          )[0].districts
        }
        keyExtractor={(item, i) => i}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("MainScreen")}
          >
            <ListItem>
              <Left>
                <Text>{item}</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          </TouchableOpacity>
        )}
      />
    );
  };

  render() {
    if (this.state.loading && !this.state.data) {
      return <ActivityIndicator />;
    }

    return (
      <Container style={{ marginTop: 30 }}>
        <Header>
          <Body>
            <Title>Select State and District</Title>
          </Body>
        </Header>
        <Content>
          <List>
            <FlatList
              data={this.state.data.states}
              style={{ flex: 0 }}
              initialNumToRender={data.length}
              keyExtractor={(item, i) => i}
              renderItem={({ item, i }) => (
                <TouchableOpacity
                  onPress={() =>
                    this.setState({
                      index:
                        this.state.index && item.state === this.state.index2
                          ? false
                          : true,
                      index2: item.state
                    })
                  }
                >
                  <ListItem selected>
                    <Left>
                      <Text>{item.state}</Text>
                    </Left>
                    <Right>
                      <Icon
                        name={
                          item.state === this.state.index2 && this.state.index
                            ? "arrow-down"
                            : "arrow-forward"
                        }
                      />
                    </Right>
                  </ListItem>
                  {this.state.index && item.state === this.state.index2 ? (
                    <this.showDistrict />
                  ) : (
                    <View></View>
                  )}
                </TouchableOpacity>
              )}
            />
          </List>
        </Content>
      </Container>
    );
  }
}

ListHeaderExample.navigationOptions = {
  title: "Select City"
};
