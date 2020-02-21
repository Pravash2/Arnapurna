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
  Button,
  Input,
  Label,
  Textarea
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
      data1: [],
      title: 0,
      display: false
    };
  }
  componentDidMount() {
    this.setState({
      data: LoadCSV.results.filter(
        data =>
          data.State_Name === this.props.navigation.state.params.state &&
          data.District_Name === this.props.navigation.state.params.district &&
          data.Crop === this.props.navigation.state.params.crop
      )
    });
  }
  onValueChange2(value) {
    console.log(value);
    this.setState({
      emergency: value
    });
  }

  render() {
    const area =
      this.state.data.map(data => data.Area).reduce((sum, i) => sum + i, 0) /
      this.state.data.length;
    const production =
      this.state.data
        .map(data => data.Production)
        .reduce((sum, i) => sum + i, 0) / this.state.data.length;
    console.log(this.state.data);
    console.log(this.state.title);
    return (
      <Container>
        <Content style={{ padding: 40 }}>
          <Text style={{ fontSize: 20, textAlign: "center" }}>
            Post Your Problem
          </Text>
          <Form style={{ marginTop: 10 }}>
            <Item disabled stackedLabel>
              <Label>State</Label>
              <Input
                value={this.props.navigation.state.params.state}
                style={{ color: "gray" }}
                disabled
              />
            </Item>
            <Item disabled stackedLabel>
              <Label>City</Label>
              <Input
                value={this.props.navigation.state.params.district}
                style={{ color: "gray" }}
                disabled
              />
            </Item>
            <Item disabled stackedLabel>
              <Label>Crop</Label>
              <Input
                value={this.props.navigation.state.params.crop}
                style={{ color: "gray" }}
                disabled
              />
            </Item>
            <Item stackedLabel>
              <Label>Area in Acers</Label>
              <Input
                onChangeText={title => this.setState({ title })}
                value={this.state.title}
                style={{ color: "gray" }}
                keyboardType="numeric"
              />
            </Item>
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="Emergency Of Your Problem"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.emergency}
                onValueChange={this.onValueChange2.bind(this)}
              >
                <Picker.Item label="Select Season" disabled value="null" />
                <Picker.Item label="Kharif" value="Kharif" />
                <Picker.Item label="Whole Year" value="Whole Year" />
                <Picker.Item label="Rabi" value="Rabi" />
              </Picker>
            </Item>

            <Button
              style={{ padding: 10, marginHorizontal: 40, marginVertical: 20 }}
              full
              success
              onPress={() => this.setState({ display: true })}
            >
              <Text style={{ color: "#fff" }}>Submit</Text>
            </Button>
          </Form>
          {this.state.display ? (
            <Text
              style={{
                textAlign: "center",
                backgroundColor: "#f4511e",
                color: "#fff"
              }}
            >
              Your {this.props.navigation.state.params.crop} Yield Will be ->
              {(this.state.title * production) / area} Ton
            </Text>
          ) : (
            <View></View>
          )}
        </Content>
      </Container>
    );
  }
}
PickerInputExample.navigationOptions = {
  title: "Upload Input"
};
