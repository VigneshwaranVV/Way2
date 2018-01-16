import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image
} from 'react-native';
import {DrawerNavigator,StackNavigator,TabNavigator } from 'react-navigation';


import Icon from 'react-native-vector-icons/Ionicons';

import { Tile,Overlay,Title,Subtitle,Heading,Button,
} from '@shoutem/ui';


class Album extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Album',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
  
  };

  render() {
    return (
      <View>
        <Text>Welcome to Album</Text>
      <Button
        onPress={() => this.props.navigation.navigate('Songs')}
        title="Go to Songs"
      />
<Tile
   imageSrc={{require: ('./img/DrawerHeader.jpg')}}
   title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores dolore exercitationem"
   featured
   caption="Some Caption Text"
/>


        
      </View>
    );
  }
}



class Songs extends React.Component {
  static navigationOptions = {
    tabBarLabel:"Songs",
   
  };

  render() {
    return (
      <View >
        <Text>Hello from Songs list/>
        
</Text>
        </View>
    );
  }
}















const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
});

const TabComponent = TabNavigator({
   
  Album: {
    screen:Album
  },
  Songs: {  
    screen:Songs
    },
    Playlist:{
      screen:Songs
    },
    Artist:{
      screen:Songs
    },
    Genres:{
      screen:Songs
    },
    Stations:{
      screen:Songs
    }
}, {
  // tabBarPosition: 'top',
  animationEnabled: true,
  tabBarOptions: {
    scrollEnabled:true,  
    activeTintColor: 'white',
    // labelStyle: {
    //   width: 200,
    //   backgroundColor:'#f46842',    
    // },
    style: {
      backgroundColor:'#f4522b',
    },
    tabStyle: {
      width:100,    
    },
  },
});


export default TabComponent
