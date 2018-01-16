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
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HeaderForAll from './HeaderForAll';


export default class TopChartsScreen extends React.Component {
    static navigationOptions = {
        drawerIcon: ({ tintColor }) => (
          <Icon name="md-star"
          style={{color:tintColor}}
          size={25} />),
          
    
  
      };
    render() {
      return (
        <View style={{height:50 }}>       
          <HeaderForAll title="Top songs"/>          
        </View>

      );
    }
  }