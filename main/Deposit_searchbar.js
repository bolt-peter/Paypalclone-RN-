import React from 'react';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Container, Title, Button, Left, Right, Body, Badge } from 'native-base';
import { TouchableHighlight, StyleSheet,Text, View } from 'react-native';
import AtoZListView from 'react-native-atoz-listview';
import Search from 'react-native-search-box';
import * as Expo from 'expo';
import { Animated } from 'react-native';
import Animation from 'lottie-react-native';

const rowHeight = 40;
class Deposit extends React.Component {
    constructor(){
        super();
        this.state = {
            progress: new Animated.Value(0),
            data: {
            "A": [
                {
                "name": "Anh Tuan Nguyen",
                "age": 28
                },
                {
                "name": "An Nhien",
                "age": 20
                },
            ],
            "C": [
                {
                "name": "Cue Dang",
                "age": 22
                },
                {
                "name": "Coom Jane",
                "age": 30
                },
            ],
            "D": [
                {
                "name": "Due Dang",
                "age": 22
                },
                {
                "name": "Doom Jane",
                "age": 30
                },
            ],
            "Z": [
                {
                "name": "Zue Dang",
                "age": 22
                },
                {
                "name": "Zoom Jane",
                "age": 30
                },
            ]
            }
        };
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
    renderRow = (item, sectionId, index) => {
      return (
        <TouchableHighlight
          style={{
            height: rowHeight,
            justifyContent: 'center',
            alignItems: 'center'}}
        >
          <Text style={{marginLeft: 5}}>{item.name}</Text>
        </TouchableHighlight>
      );
    }
    beforeFocus = () => {
        return new Promise((resolve, reject) => {
            console.log('beforeFocus');
            resolve();
        });
    }
 
    // Important: You must return a Promise 
    onFocus = (text) => {
        return new Promise((resolve, reject) => {
            console.log('beforeFocus', text);
            resolve();
        });
    }
    afterFocus = () => {
        return new Promise((resolve, reject) => {
            console.log('afterFocus');
            resolve();
        });
    }

    render(){
            const styles = StyleSheet.create({
                            animationContainer: {
                                backgroundColor: '#fff',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flex: 1,
                            },
                            buttonContainer: {
                                paddingTop: 20,
                            },
                            });

        return(
            <Expo.LinearGradient
                    colors={['#00acc1', '#0097a7', '#00796b']}>
                    <View style={{ height: 700}}>
                        <Search
                        ref="search_box"
                        /**
                        * There many props that can customizable
                        * Please scroll down to Props section
                        */
                        />
                    <Animation
                            style={{
                            marginTop: 0,
                            marginLeft: 40,
                            width: 200,
                            height: 200,
                            }}
                            source={require('../assets/like.json')}
                            loop = {true}
                            ref={(animation) => this.animation = animation}
                        />         
                        <AtoZListView
                        data={this.state.data}
                        renderRow={this.renderRow}
                        rowHeight={rowHeight}
                        sectionHeaderHeight={40}
                        />
                    </View>
                </Expo.LinearGradient>

       )
    }
}
export default Deposit;

