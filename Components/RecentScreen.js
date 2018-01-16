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


export default class RecentScreen extends React.Component {
  static navigationOptions = {

    drawerIcon: ({ tintColor }) => (
      <MaterialCommunityIcons name="restore" size={25} 
      style={{color:tintColor}}
      />),
      


  };
    render() {
      return (
        <View style={{height:70 }}>       
          <HeaderForAll title="Recents" />          
        </View>

      );
    }
  }