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
import { ActivityIndicator, FlatList, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class ListHeaderExample extends Component {
  constructor(props) {
    super(props);
  }

  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/Ionicons.ttf")
    });
  }

  render() {
    return (
      <Container style={{ marginTop: 30 }}>
        <View>
          <Text
            style={{ textAlign: "center", fontSize: 25, fontWeight: "900" }}
          >
            Click Specific Plant
          </Text>
        </View>

        <Content>
          <List style={{ marginTop: 50, padding: 15 }}>
            <TouchableOpacity>
              <ListItem
                onPress={() =>
                  this.props.navigation.navigate("Disease_Detection", {
                    plant: "corn"
                  })
                }
                selected
              >
                <Left>
                  <Text>Corn</Text>
                </Left>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
              <ListItem
                onPress={() =>
                  this.props.navigation.navigate("Disease_Detection", {
                    plant: "paddy"
                  })
                }
                selected
              >
                <Left>
                  <Text>Paddy</Text>
                </Left>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
              <ListItem
                onPress={() =>
                  this.props.navigation.navigate("Disease_Detection", {
                    plant: "potato"
                  })
                }
                selected
              >
                <Left>
                  <Text>Potato</Text>
                </Left>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
              <ListItem
                onPress={() =>
                  this.props.navigation.navigate("Disease_Detection", {
                    plant: "tomato"
                  })
                }
                selected
              >
                <Left>
                  <Text>Tomato</Text>
                </Left>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
              <ListItem>
                <Left>
                  <Text>Maizes</Text>
                </Left>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
              <ListItem>
                <Left>
                  <Text>Peanuts</Text>
                </Left>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
              <ListItem>
                <Left>
                  <Text>Moong Dal</Text>
                </Left>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
              <ListItem>
                <Left>
                  <Text>ChickPea</Text>
                </Left>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
              <ListItem>
                <Left>
                  <Text>Lentil</Text>
                </Left>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
            </TouchableOpacity>
          </List>
        </Content>
      </Container>
    );
  }
}
ListHeaderExample.navigationOptions = {
  title: "Select Plant"
};
