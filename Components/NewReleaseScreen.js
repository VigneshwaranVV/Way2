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
import TabComponent from './TabNavigation';


export default class MusicLibraryScreen extends React.Component {
    static navigationOptions = {
      drawerLabel:'MusicLibrary',
      drawerIcon: ({ tintColor }) => (
        <MaterialCommunityIcons name="library-music" 
        style={{color:tintColor}}   
        size={25} />),
        
  

    };  
    constructor(props) {
      super(props);
      
    }
    
    render() {
      return (
        <View style={{flex: 1 , flexDirection: 'column', }}>       
          <HeaderForAll title="NewReleases" v={this.props}/>
          
        </View>

      );
    }
  }