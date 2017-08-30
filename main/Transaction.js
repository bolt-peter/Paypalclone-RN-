import React, { Component } from 'react';
import { StyleSheet, 
         Text, 
         View,
         TouchableOpacity } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements'
class Transaction extends React.Component {
    constructor(){
        super();
        this.state ={
            transactions: [{
            recipient: 'Loading', 
            amount: 'Loading',
            date: 'Loading'
          }]
        };
    }
    componentDidMount(){
        fetch('https://polar-dawn-76027.herokuapp.com/transaction', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        })
        .then((response) => response.json())
        .then((responseJson) => {
            var obj = {
            recipient: responseJson.recipient, 
            amount: responseJson.amount,
            date: responseJson.date
          };
          var return_array = [];
          return_array.push(obj);
          this.setState({
              transactions: return_array
          });
        });
    }
    render(){
        return(
        <View>
        <View style={{flexDirection: 'row'}}>
            <Icon type='material-community' 
                  name='book-open-page-variant'
                  style={{marginLeft: 10}}
                  />
            <Text style={{marginLeft: 150}}>To: {this.state.transactions[0].recipient} </Text>
            <Text>{this.state.transactions[0].amount}</Text>
          </View>
        <View><Text style={{marginLeft: 250}}>{this.state.transactions[0].recipient.date} </Text></View>
        </View>
        )
    }
}

export default Transaction