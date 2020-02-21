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
  Form,
  Item,
  Input,
  Label,
  Picker,
  Textarea
} from "native-base";
import axios from "axios";
import key from "../key";
import { Dimensions } from "react-native";

import { ScrollView, KeyboardAvoidingView, FlatList } from "react-native";
export default class CardShowcaseExample extends Component {
  state = {
    post: [],
    post_data: "",
    emergency: ""
  };
  componentDidMount() {
    axios
      .get(
        `${key.url}/api/v1/post/${this.props.navigation.state.params.item.id}`
      )
      .then(res => this.setState({ post: res.data }));
  }
  postAnswer = () => {
    console.log("post initiated");
    axios
      .post(`${key.url}/api/v1/review/create/`, {
        farmer_id: this.props.navigation.state.params.item.farmer.farmer_id,
        id: this.state.post.id,
        review: this.state.post_data,
        star: this.state.emergency
      })
      .then(res =>
        this.props.navigation.navigate("AllPost", { item: res.data })
      )
      .catch(err => console.log(err));
  };
  onValueChange2(value) {
    this.setState({
      emergency: value
    });
  }
  render() {
    const data = this.props.navigation.state.params.item;
    console.log(this.state.post.id);
    if (this.state.post)
      return (
        <ScrollView>
          <Container style={{ height: 10000 }}>
            <Content>
              <Card style={{ flex: 0 }}>
                <CardItem>
                  <Left>
                    <Thumbnail
                      source={require("../assets/images/Stockperson.jpg")}
                    />
                    <Body>
                      <Text>{data.farmer.name}</Text>
                      <Text note>{this.state.post.tag}</Text>
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
                    <Text>{data.post_data}</Text>
                  </Body>
                </CardItem>

                <CardItem>
                  <Left>
                    <Button transparent textStyle={{ color: "#87838B" }}>
                      <Icon name="thumbs-up" />
                      <Text>19 stars</Text>
                    </Button>
                  </Left>
                </CardItem>
              </Card>
              <Text style={{ textAlign: "center", margin: 10, color: "blue" }}>
                Answers
              </Text>
              <ScrollView>
                <FlatList
                  data={this.state.post.reviews}
                  keyExtractor={(item, i) => i}
                  renderItem={({ item }) => (
                    <Card>
                      <CardItem>
                        <Body>
                          <Text>{item.review}</Text>
                        </Body>
                      </CardItem>
                    </Card>
                  )}
                />
              </ScrollView>
              <Text
                style={{
                  textAlign: "center",
                  margin: 10,
                  color: "#f4511e"
                }}
              >
                Give Your Reply
              </Text>
              <Form style={{ paddingHorizontal: 20 }}>
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
                    {/* <Picker.Item label="Guaranty" value="guaranty" />
                <Picker.Item label="Analysis" value="analysis" />
                <Picker.Item label="May Be" value="may be" />
                <Picker.Item label="Theoritically" value="theoritical" /> */}
                    <Picker.Item
                      label="Emergency Of Your Problem"
                      disabled
                      value="null"
                    />
                    <Picker.Item label="guaranty" value="Guaranty" />
                    <Picker.Item label="analysis" value="Analysis" />
                    <Picker.Item label="may be" value="May be" />
                    <Picker.Item label="theoritical" value="Theoritically" />
                  </Picker>
                </Item>
                <Textarea
                  onChangeText={post_data => this.setState({ post_data })}
                  rowSpan={4}
                  bordered
                  placeholder="Enter Your Answer"
                />
                <Button
                  style={{
                    padding: 10,
                    marginHorizontal: 40,
                    marginVertical: 20
                  }}
                  full
                  success
                  onPress={this.postAnswer}
                >
                  <Text style={{ color: "#fff" }}>Submit</Text>
                </Button>
              </Form>
            </Content>
          </Container>
        </ScrollView>
      );
    else {
      return (
        <View>
          <Text>Hello</Text>
        </View>
      );
    }
  }
}
CardShowcaseExample.navigationOptions = {
  title: "Review Post"
};
