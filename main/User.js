import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { StackNavigator } from 'react-navigation';
import { Container, 
         Footer, 
         FooterTab, 
         Content, Header, 
         Title, Button, Left, Right, 
         Body, Icon } from 'native-base';

class User extends React.Component {
    constructor(){
        super()
    }
    render(){
        return(
            <View style={styles.container}>
            <Text> Hey yoo succeded </Text>
            </View>
        )
    }



}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default User