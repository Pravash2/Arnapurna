import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Icon,
  Form,
  Item,
  Picker,
  List,
  ListItem,
  Text,
  Left,
  Body,
  Right,
  Title,
  Button
} from "native-base";
import * as Font from "expo-font";
import LoadCSV from "../data/app.json";
import { loadAsync } from "expo-font";
import { FlatList, TouchableOpacity, View } from "react-native";
export default class PickerInputExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected2: undefined,
      data: [],
      data1: []
    };
  }
  componentDidMount() {
    this.setState({
      data: [...new Set(LoadCSV.results.map(data => data.State_Name))]
    });
  }

  render() {
    console.log(this.state.data);
    return (
      <Container>
        <Content>
          <List>
            <FlatList
              data={this.state.data}
              style={{ flex: 0 }}
              keyExtractor={(item, i) => item.Area}
              renderItem={({ item, i }) => (
                <TouchableOpacity onPress={() => console.log("jej")}>
                  <ListItem
                    onPress={() =>
                      this.props.navigation.navigate("District_Selection", {
                        state: item
                      })
                    }
                    selected
                  >
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
          </List>
        </Content>
      </Container>
    );
  }
}
PickerInputExample.navigationOptions = {
  title: "Select Your State"
};
