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
import {DrawerNavigator,StackNavigator,DrawerItems, SafeAreaView } from 'react-navigation';


import MyHomeScreen from './HomeScreen'
import MusicLibraryScreen from './MusicLibraryScreen'

import RecentScreen from './RecentScreen';
import TopChartsScreen from './TopCharts';
import HeaderForAll from './HeaderForAll';
import EvilIcon from 'react-native-vector-icons/EvilIcons';  
  
 import {Avatar} from 'react-native-elements';



 const ListWithImage = (props) => (
    <View>
      <View
        // style={{
        // //  backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/3/36/Hopetoun_falls.jpg)', 
        //   //backgroundColor: '#f50057',
        //   backgroundImage:url("./Components/img/DrawerHeader.jpg"),
        //   height: 140,
        //   alignItems: 'center',
        //   justifyContent: 'center',
        // }}
      >
       <ImageBackground style={{height: 150}} source={require('./img/DrawerHeader.jpg')}>
       {/* <Image style={{height:50 ,width:50}} source={require('./Components/img/user.png')} /> */}
       {/* <EvilIcon name="user" size={40}/> */}
  
       <Avatar
  large
  rounded
  icon={{name: 'user',color:'#327cf2'}}
  overlayContainerStyle={{backgroundColor: '#82a8e5'}}
  
  onPress={() => console.log("Works!")}
  activeOpacity={0.7}
  // containerStyle={{flex: 5, marginRight: 60}}
/>




       <Text style={{ color: 'white', fontSize: 20 }}>
          username@domain.com
        </Text>

  </ImageBackground>
        
      </View>
      <DrawerItems {...props} />
    </View>
  )

 const MyApp = DrawerNavigator(
    {
      Home: {  screen: MyHomeScreen },
      RecentScreen:{ screen: RecentScreen },
      TopCharts:{ screen: TopChartsScreen },
      NewReleases:{ screen:TopChartsScreen },
      MusicLibrary: { screen: MusicLibraryScreen },
      BrowseStations:{ screen:TopChartsScreen },
      Shop:{ screen:TopChartsScreen },
      
    },
    
    {
      drawerWidth:320,
      contentComponent:ListWithImage,
      
      contentOptions: {

        activeTintColor: '#f4522b',
        itemsContainerStyle: {
          marginVertical: 0,
        },

      }
  }
  
  );




export default class MyHomeScreen2 extends React.Component {
    static navigationOptions = {
      title: 'Home2',
    }
  
    render() {
      return (
        <MyApp />
      );
    }
  }