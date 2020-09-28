/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
//mark :- pages
import Home from './Pages/Home';
import Discription from "./Pages/Discription";
import Car_Discription from './Pages/Car_Discription';
import Qotion_quize from "./Pages/Qotion_quize";
import Your_style from "./Pages/Your_style.js";
import Consultent from './Pages/Consultent';
import Example from './Pages/Example';
import Example2 from './Pages/Example2';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render(){
    return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
        <Stack.Screen name="Discription" component={Discription} options={{headerShown:false}} />
        <Stack.Screen name="Car_Discription" component={Car_Discription} options ={{headerShown:false}} />
        <Stack.Screen name="Qotion_quize" component={Qotion_quize} options ={{headerShown:false}} />
        <Stack.Screen name="Your_style" component={Your_style} options ={{headerShown:false}} />
        <Stack.Screen name="Consultent" component={Consultent} options ={{headerShown:false}} />
          <Stack.Screen name="Example" component={Example} options={{ headerShown: false }} />
          <Stack.Screen name="Example2" component={Example2} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
    )
  }
}



const styles = StyleSheet.create({
  
});


