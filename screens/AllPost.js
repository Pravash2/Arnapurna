import React, { Component } from "react";
import { Image } from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right
} from "native-base";
import { FlatList, Dimensions } from "react-native";
import axios from "axios";
import key from "../key";
import { TouchableOpacity } from "react-native-gesture-handler";
export default class CardImageExample extends Component {
  state = {
    post: []
  };
  componentDidMount() {
    axios
      .get(`${key.url}/api/v1/post/`)
      .then(res => this.setState({ post: res.data }));
  }
  render() {
    console.log(this.state.post);
    return (
      <Container>
        <Content>
          <FlatList
            data={this.state.post}
            keyExtractor={(item, i) => i}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate("SinglePost", { item })
                }
              >
                <Card>
                  <CardItem>
                    <Left>
                      <Thumbnail
                        source={require("../assets/images/Stockperson.jpg")}
                      />
                      <Body>
                        <Text>{item.title}</Text>
                        <Text note>{item.tag}</Text>
                      </Body>
                    </Left>
                  </CardItem>
                  <CardItem>
                    <Body>
                      <Image
                        source={{
                          uri: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTozGxOWMTTBmUdNJZ0xXwEo4zWU_4FnfE17KVeQxL12Be6HFqwbw&s`
                        }}
                        style={{
                          height: 200,
                          width: Dimensions.get("window").width - 40,
                          flex: 1
                        }}
                      />
                      <Text>{item.post_data}</Text>
                    </Body>
                  </CardItem>
                  <CardItem>
                    <Left>
                      <Button transparent>
                        <Icon active name="eye" />
                        <Text>12 Views</Text>
                      </Button>
                    </Left>
                    <Body>
                      <Button transparent>
                        <Icon active name="chatbubbles" />
                        <Text>Answers {item.reviews.length}</Text>
                      </Button>
                    </Body>
                    <Right>
                      <Text>
                        {Math.round(
                          Math.floor(
                            (new Date().getTime() -
                              new Date(item.when).getTime()) /
                              (1000 * 60 * 60)
                          ),
                          2
                        )}
                        h ago
                      </Text>
                    </Right>
                  </CardItem>
                </Card>
              </TouchableOpacity>
            )}
          />
        </Content>
      </Container>
    );
  }
}

CardImageExample.navigationOptions = {
  title: "Community Help"
};
