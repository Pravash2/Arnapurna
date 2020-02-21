import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  Icon,
  Left
} from "native-base";
import { FlatList, TouchableOpacity, Linking } from "react-native";
export default class CardItemBordered extends Component {
  render() {
    const { params } = this.props.navigation.state;
    console.log(params);
    return (
      <Container>
        <Content padder>
          <Card>
            <CardItem header bordered>
              <Text>{params.disease} Disease</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <FlatList
                  data={params.data.solution}
                  keyExtractor={(item, i) => i}
                  renderItem={({ item }) => <Text>{item}</Text>}
                />
              </Body>
            </CardItem>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL(
                  `https://google.com/search?q=${params.disease
                    .split(" ")
                    .join("+")}`
                );
              }}
            >
              <CardItem footer bordered>
                <Text>Find on Web Solution</Text>
                <Left>
                  <Icon
                    style={{ marginLeft: 10 }}
                    primary
                    name="arrow-forward"
                  />
                </Left>
              </CardItem>
            </TouchableOpacity>
          </Card>
        </Content>
      </Container>
    );
  }
}
CardItemBordered.navigationOptions = {
  title: "Instant Solution"
};
