import React from 'react';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Container, Title, Header, Content, Form, Input, Label, Item, Button, Left, Right, Body, Badge } from 'native-base';
import { TouchableHighlight, TextInput, 
         StyleSheet,Text, View,
         TouchableOpacity,
         TouchableWithoutFeedback } from 'react-native';
import AtoZListView from 'react-native-atoz-listview';
import Search from 'react-native-search-box';
import * as Expo from 'expo';
import { Animated } from 'react-native';
import Animation from 'lottie-react-native';
import * as Animatable from 'react-native-animatable';

//numpad
import { Keyboard } from 'react-native';
class Send extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: 'Useless Placeholder',progress: new Animated.Value(0), fontSize: 15};
    }
    componentDidMount() {
        this.initAnimation();
    }
    initAnimation(){
        if (!this.animation){
        setTimeout(() => {
            this.initAnimation();
        }, 100);
        } else {
            this.animation.play();
        }
    }
  render() {
    return (
      <Container>
        <Animatable.View animation='bounceInDown'>
        <Header />
        </Animatable.View>
        <Content>
          <Form>
           <Animatable.View animation='fadeInRight' easing='ease-in-out'>
            <Item floatingLabel style={{backgroundColor: 'skyblue'}}>
              <Label>Username</Label>
              <Input 
              keyboardType='number-pad'/>
            </Item>
            </Animatable.View>
            <Animatable.View animation='slideInRight'>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
            </Animatable.View>
          </Form>
          <Animatable.Text animation='slideInDown' iterationCount={'infinite'} direction="alternate">Up and down you go</Animatable.Text>
          <Animatable.Text animation="pulse" easing="ease-out" iterationCount="infinite" style={{ textAlign: 'center' }}>❤️</Animatable.Text>

<Animatable.View animation='fadeInUpBig' >
        <TouchableWithoutFeedback onPress={() => this.refs.text.transitionTo({opacity: 0.2})}>
            <Animatable.Text ref="text">Fade me!</Animatable.Text>
        </TouchableWithoutFeedback>
        <TouchableOpacity onPress={() => this.setState({fontSize: (this.state.fontSize || 10) + 5 })}>
        <Animatable.Text transition="fontSize" style={{fontSize: this.state.fontSize || 10}}>Size me up, Scotty</Animatable.Text>
        </TouchableOpacity>
        <Text>WTF</Text>
          <Animation
                style={{
                marginTop: 0,
                marginLeft: 40,
                width: 200,
                height: 200,
                }}
                source={require('../assets/Plane.json')}
                loop = {true}
                ref={(animation) => this.animation = animation}
            /> 
            </Animatable.View> 
        </Content>
      </Container>
    );
  }
}
export default Send;
//  '🍕'