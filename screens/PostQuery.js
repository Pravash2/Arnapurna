import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Textarea,
  Button,
  Picker,
  Icon,
  KeyboardAvoidingView
} from "native-base";
import { Text } from "react-native";
import axios from "axios";
import key from "../key";

export default class StackedLabelExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emergency: "Select Your Emergency",
      farmer_id: "",
      title: "",
      tags: "",
      post_data: ""
    };
  }
  componentDidMount() {
    const data = this.props.navigation.state.params.data;
    this.setState({
      farmer_id: data.user.farmer_id,
      title: `${Object.entries(this.props.navigation.state.params.data)
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
        .join(" ")} [Disease Regarding]`
    });
  }
  onValueChange2(value) {
    this.setState({
      emergency: value
    });
  }

  postSend = () => {
    const form_data = {
      farmer_id: "f43b78c1-e401-4b41-b764-f4071e5e9e36",
      post_data: this.state.post_data,
      tag: this.state.tags,
      state: this.state.emergency,
      title: this.state.title,
      pic: ""
    };
    console.log(form_data);
    axios
      .post(`${key.url}/api/v1/post/create/`, form_data)
      .then(res =>
        this.props.navigation.navigate("AllPost", { data: res.data })
      )
      .catch(err => console.log(err));
  };

  render() {
    console.log(this.state);
    return (
      <Container>
        <Content style={{ padding: 40 }}>
          <Text style={{ fontSize: 20, textAlign: "center" }}>
            Post Your Problem
          </Text>
          <Form style={{ marginTop: 10 }}>
            <Item disabled stackedLabel>
              <Label>Farmer Id</Label>
              <Input
                style={{ color: "gray" }}
                value={this.state.farmer_id}
                disabled
                style={{ fontSize: 12 }}
              />
            </Item>
            <Item disabled stackedLabel>
              <Label>Title</Label>
              <Input
                onChangeText={title => this.setState({ title })}
                value={this.state.title}
                style={{ color: "gray" }}
                disabled
              />
            </Item>

            <Item stackedLabel>
              <Label>Tags</Label>
              <Input onChangeText={tags => this.setState({ tags })} />
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
                {/* <Picker.Item label="Guaranty" value="guaranty" />
                <Picker.Item label="Analysis" value="analysis" />
                <Picker.Item label="May Be" value="may be" />
                <Picker.Item label="Theoritically" value="theoritical" /> */}
                <Picker.Item
                  label="Emergency Of Your Problem"
                  disabled
                  value="null"
                />
                <Picker.Item label="Urgent" value="Urgent" />
                <Picker.Item label="Curosity" value="Curosity" />
                <Picker.Item label="Knowledge" value="Knowledge" />
                <Picker.Item label="Awarness" value="Awarness" />
              </Picker>
            </Item>
            <Textarea
              onChangeText={post_data => this.setState({ post_data })}
              rowSpan={5}
              bordered
              placeholder="Complete Details of your problem"
            />
            <Button
              style={{ padding: 10, marginHorizontal: 40, marginVertical: 20 }}
              full
              success
              onPress={this.postSend}
            >
              <Text style={{ color: "#fff" }}>Submit</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

StackedLabelExample.navigationOptions = {
  title: "Upload Your Problems"
};
