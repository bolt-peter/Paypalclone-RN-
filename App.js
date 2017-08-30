import React, { Component } from 'react';
import { StyleSheet, 
         Text, 
         View,
         TouchableOpacity } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { StackNavigator } from 'react-navigation';
//import components
import User from './main/User';
import Transaction from './main/Transaction';
import Send from './main/Send';
import Bottom from './main/Bottom';

// import Deposit from './main/Deposit_listview';
import Deposit from './main/Deposit_searchbar';

import { Icon } from 'react-native-elements'
import { Container, Footer, FooterTab, Content, Header, Title, Button, Left, Right, Body, Badge } from 'native-base';
class HeaderExample extends Component {
  static navigationOptions = {
    title: 'Main'
  };
  handleClick(){
    console.log('in');
    this.props.navigation.navigate('Deposit')
    fetch('https://polar-dawn-76027.herokuapp.com/', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
  }
  handleSend(){
    console.log('in');
    this.props.navigation.navigate('Send');
  }
  render() {
    return (
      <Container>
        <Content>
      <Container>
        <Content>
          <Grid>
            <Col style={{ backgroundColor: '#3f51b5', height: 300 }}>
            <View style={{flexDirection: 'row'}}>
            <Text style={{padding: 10, color: 'white'}}> Manage Paypal Balance </Text>
          <Button transparent iconRight light style={{ marginLeft: 100, color: 'white'}}>
            <Text style={{color: 'white'}}>Next</Text>
            <Icon   name='ios-redo' type='ionicon' color='white' style={{marginLeft: 5}}/>
          </Button>
          </View >
          <View style={{flexDirection: 'row'}}>
            <Text style={{padding: 10, marginTop: '10%', color: 'white'}}> See Activity/Transactions</Text>
          <Button transparent iconRight light style={{ marginLeft: 90, color: 'white',  marginTop: '10%'}}>
            <Text style={{color: 'white'}}>View</Text>
            <Icon   name='ios-redo' type='ionicon' color='white' style={{marginLeft: 5}}/>
          </Button>
          </View>
          <Transaction />
          <Transaction />
            </Col>
          </Grid>
          <Grid>
            <Col style={{ backgroundColor: '#635DB7', height: 200 }}>
          <Button large rounded iconLeft style={{backgroundColor: 'skyblue', 
          marginTop: '40%', 
          marginLeft: '10%', 
          shadowOffset: {
            width: 8,
            height: 8
            },
          shadowOpacity: 0.3,
          shadowRadius: 5}}
          onPress={() => this.handleClick()}>
            <Icon name='ios-filing' type='ionicon' style={{marginRight: 5}}/>
            <Text>Deposit</Text>
          </Button>
            </Col>
            <Col style={{ backgroundColor: '#00CE9F', height: 200 }}>
            <Button large rounded iconLeft style={{backgroundColor: 'skyblue', 
            marginTop: '40%',
            marginLeft: '20%',
            shadowOffset: {
            width: 8,
            height: 8
            },
          shadowOpacity: 0.3,
          shadowRadius: 5}}
           onPress={() => this.handleSend()}>
              <Icon name='near-me' type='material-community' style={{marginRight: 5}}/>
              <Text>Send</Text>
            </Button>
            </Col>
          </Grid>
          <Grid>
            <Col style={{ backgroundColor: '#3f51b5', height: 200 }}>
              <Button large rounded iconLeft style={{backgroundColor: 'skyblue', 
              marginLeft: '35%', 
              marginTop: '8%',
              shadowOffset: {
                width: 8,
                height: 8
                },
                shadowOpacity: 0.3,
                shadowRadius: 5}}>
                <Icon name='message-bulleted' type='material-community'/>
                <Text>More</Text>
              </Button>
            </Col>
          </Grid>
        </Content>
      </Container>
          </Content>
      <Bottom />
      </Container>
    );
  }
}
export default StackNavigator({
  Main: {
    screen: HeaderExample
  },
  User: {
    screen: User
  },
  Deposit: {
    screen: Deposit
  },
  Send: {
    screen: Send
  }
}, {initialRouteName: 'Main'});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


