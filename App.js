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


import MyHomeScreen from './Components/HomeScreen'
import MusicLibraryScreen from './Components/MusicLibraryScreen'

import RecentScreen from './Components/RecentScreen';
import TopChartsScreen from './Components/TopCharts';
import HeaderForAll from './Components/HeaderForAll';
import EvilIcon from 'react-native-vector-icons/EvilIcons';  
  
 import {Avatar} from 'react-native-elements';


import MyHomeScreen2 from './Components/Testing';

  // const styles = StyleSheet.create({
  //   icon: {
  //     width: 24,
  //     height: 24,
  //   },
  //   heading:{
  //    backgroundColor:'red',
     
  //   },
  //   container: {
  //     flex: 1,
  //   },
  // });


  
  
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
       <ImageBackground style={{height: 150}} source={require('./Components/img/DrawerHeader.jpg')}>
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








  const ModalStack = StackNavigator({
    Home: {
      screen: HeaderForAll,
    },
    Profile: {
      screen: MyHomeScreen2,
    },
  });

  













  export default class App extends Component<{}> {
    render() {
      return (
        //  <ModalStack />
     <MyApp />
          
      );
    }
  }