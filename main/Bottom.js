import React, { Component } from 'react';
import { StyleSheet, 
         Text, 
         View,
         TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements'
import { Container, Footer, FooterTab, Content, Header, Title, Button, Left, Right, Body, Badge } from 'native-base';
class Bottom extends React.Component {
    render(){
        return(
        <Footer>
          <FooterTab>
            <Button>
              <Icon name="apps" />
            </Button>
            <Button active>
              <Icon active name="navigate" />
            </Button>
            <Button>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('User')}>
              <Icon name="person" />
              </TouchableOpacity>
            </Button>
          </FooterTab>
        </Footer>
        )
    }
}
export default Bottom;