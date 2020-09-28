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
  ImageBackground,
  TouchableOpacity,
  Image
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
//mark :- pages
import Home from "../Pages/Home";

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      ImageBac: require("../images/show_image.png"),
      back_icon: require("../images/Back_icone.png")

    }
  }
  render(){
    return (
      <View style={{backgroundColor:'white',flex:1}}>
      <ScrollView>
          <ImageBackground style={{ width:"100%",height:250}} resizeMode ='cover'
          source ={this.state.ImageBac} >
              <TouchableOpacity style={{marginLeft:30,marginTop:60}}
              onPress={()=>this.props.navigation.navigate("Home")} >
                  <Image style={{width:40,height:40}}
                  source={this.state.back_icon} />
              </TouchableOpacity>
          </ImageBackground>
          <View style={{flexDirection:'row',marginTop:20,marginBottom:10,marginLeft:20}}>
              <Image style={{width:16,height:16,marginRight:5}}
              source={require("../images/Time_icon.png")} />
            <Text style={{ color: "#CCCCCC", fontSize: 12, fontWeight:'500'}}>2 days ago</Text>
          </View>
          <Text style={{ fontSize: 36, fontWeight: '600', marginLeft:20,marginRight:60}}>Burning desire golden key or red herring</Text>
          <Text style={{ color: '#F5879B', fontSize:12,marginLeft:20,marginRight:20,marginTop:20,fontWeight:'600'}}>CATEGORY</Text>
          <Text style={styles.discriontion_text}>Classifieds are usually the first place you think of when you are getting ready to make a purchase. Whether you want to purchase a vehicle, bed, or pet,the classified section of your local newspaper can be one of the best resources available</Text>
          <View style={{flexDirection:'row',marginTop:20,marginBottom:20,marginLeft:20,alignItems:'center'}}>
              <Image style={{width:24,height:21,marginRight:5}}
              source={require("../images/Hart_icon.png")} />
            <Text style={{ fontSize: 16, fontWeight: '500', color:'#CCCCCC'}}>43</Text>
          </View>
      </ScrollView>
      </View>
    )
  }
}



const styles = StyleSheet.create({
    discriontion_text:{
        fontSize:16,
        marginLeft:20,
        marginRight:100,
        marginTop:15,
        textAlignVertical:'center',
        
    }
 
});


