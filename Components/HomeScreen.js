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
import {DrawerNavigator} from 'react-navigation';

import Ionicon from 'react-native-vector-icons/Ionicons';

import SearchBar from 'react-native-searchbar'
import { Tile } from 'react-native-elements';


export default class MyHomeScreen extends React.Component {
    static navigationOptions = {
      drawerLabel: 'Home',
      drawerIcon: ({tintColor}) => (
        <Ionicon name="md-home" 
        style={{color:tintColor}}
        size={25} />),
      
    };
    constructor(props) {
      super(props);
      this.state = {text: ''};
    }  
  
    render() {
      return (
        <View style={{padding: 35}}>
          <SearchBar showOnLoad/>
           <TextInput
          style={{height: 40}}
          placeholder="Search here!"
          onChangeText={(text) => this.setState({text})}
        />
          <Text>    welcome
</Text>
        <Button
          onPress={() => this.props.navigation.navigate('DrawerOpen')}
          title="Go to MusicLibrary"
        />





        </View>
      );
    }
  }