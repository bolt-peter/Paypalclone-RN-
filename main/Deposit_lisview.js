import React, { Component } from 'react';
import { StyleSheet, 
         Text, 
         TouchableOpacity,
         Platform } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Icon } from 'react-native-elements'
import { Container, 
         Content, 
         Header, 
         Title, 
         Button, 
         Left, Right, Body, Badge,
         ListItem, Radio,
         Picker, Form, View, H3, Item as FormItem} from 'native-base';
const Item = Picker.Item;

class Deposit extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      selected1: "key1"
    };
  }
  onValueChange(value) {
    this.setState({
      selected1: value
    });
  }
    render(){
        return(
            <Grid>
                <Col style={{backgroundColor: 'skyblue',  height: 650}}>
                <Container>
                    <Header>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                        <Icon name="arrow-back" />
                        </Button>
                    </Left>
                    <Body style={{ flex: 3 }}>
                        <Title>Custom Header</Title>
                    </Body>
                    <Right />
                    </Header>
                    <Content>
                        <Form>
                            <Picker
                            renderHeader={backAction =>
                                <Header style={{ backgroundColor: "#f44242" }}>
                                <Left>
                                    <Button transparent onPress={backAction}>
                                    <Icon name="arrow-back" style={{ color: "#fff" }} />
                                    </Button>
                                </Left>
                                <Body style={{ flex: 3 }}>
                                    <Title style={{ color: "#fff" }}>Your Header</Title>
                                </Body>
                                <Right />
                                </Header>}
                            mode="dropdown"
                            style={{ width: Platform.OS === "ios" ? undefined : 200 }}
                            selectedValue={this.state.selected1}
                            onValueChange={this.onValueChange.bind(this)}
                            >
                            <Item label="Wallet" value="key0" />
                            <Item label="ATM Card" value="key1" />
                            <Item label="Debit Card" value="key2" />
                            <Item label="Credit Card" value="key3" />
                            <Item label="Net Banking" value="key4" />
                            </Picker>
                        </Form>
                    </Content>

                </Container>
                </Col>
            </Grid>
       )
    }
}
export default Deposit;