




import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TextInput,
  ScrollView,
  ImageBackground,
  Alert,

} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import App from '../App'


import {Header} from 'react-native-elements';



export default class HeaderForAll extends React.Component {
  constructor(props) {
    super(props);
    
  }
    render() {
      return (
        <View style={{flex: 1 , flexDirection: 'column', }}>       
         
            <View style={{flex:1,height:50,flexDirection:'row', backgroundColor: '#f4522b'}}>
              <View style={{flex:2}} >
                <Icon.Button style={{ backgroundColor: '#f4522b' ,padding:15 , }} name="md-menu" size={30} color="white" 
                 onPress={() => {
                  Alert.alert('You tapped the button!');
                }}
              
                />
              </View>
              <View style={{flex:5,paddingTop:15}}>
                <Text style={{
                  color: 'white',
                  fontSize: 20,

                  }}>
                    {this.props.title}
                  
                </Text>
              </View>
              <View style={{flex:1 , paddingTop:15}}>
              <Icon.Button style={{ backgroundColor: '#f4522b'}} name="md-search" size={25} color="white" />
              </View>
            </View>
        </View>


// {/* <Header
// leftComponent={<Icon.Button  name="md-menu"  
//          onPress={() => this.props.v.navigation.navigate('DrawerOpen')}
//         />}
//   // leftComponent={{ icon: 'menu', color: '#fff' }}
//   centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
//   rightComponent={{ icon: 'home', color: '#fff' }}
// /> */}








      );
    }
  }