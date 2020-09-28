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
  Image,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { TouchableOpacity } from 'react-native-gesture-handler';
//mark :- pages
import Home from "../Pages/Home";
import Qotion_quize from "../Pages/Qotion_quize";
export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      _back: require("../images/<_back_icone.png"),
        back_image :require("../images/Group14.png")
    }
  }
  render(){
    console.log('recive', this.props.route.params.send)
    const data = this.props.route.params.send;
    return (
      <ImageBackground style={{flex:1}}
      source={this.state.back_image} >
          <SafeAreaView>
          <ScrollView>
              <TouchableOpacity style={{marginLeft:20,marginTop:20}}
              onPress={()=>this.props.navigation.navigate("Home")} >
                  <Image style={{width:9,height:16}}
                  source={this.state._back} />
              </TouchableOpacity>
              <View style={{marginTop:40,marginLeft:20}}>
                  <Text style={styles.title_text}>{data.short_description}</Text>
                  {/* <Text style={styles.title_text}></Text> */}
              </View>
              <Text style={styles.discription}>{data.long_description}</Text>
              <View style={{flexDirection:'row',marginTop:20,marginBottom:10,marginLeft:20,alignItems:'center'}}>
              <Image style={{width:24,height:21,marginRight:5}}
              source={require("../images/Hart_icon.png")} />
              <Text style={{ fontSize: 16, fontWeight:'500',color:'#CCCCCC'}}>{data.price}</Text>
          </View>
          <TouchableOpacity style={styles.Next_View} 
              // onPress={() => this.props.navigation.navigate("Qotion_quize", { send: data})}
              onPress={() => this.props.navigation.navigate("Qotion_quize", { send: data })} 
              >
              <Text style={{ color: 'white', fontSize:16,fontWeight:'bold'}}>Start</Text>
          </TouchableOpacity>
          </ScrollView>
          </SafeAreaView>
      </ImageBackground>
    )
  }
}



const styles = StyleSheet.create({
    title_text :{
        fontSize:36,
        fontWeight:'600',
    },
    discription:{
        fontSize:16,
        marginLeft:20,
        marginRight:60,
        marginTop:20,
    },
    Next_View :{
        marginLeft:20,
        marginRight:20,
        height:60,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20,
        marginTop:150,
        backgroundColor:'#F5879B',
        marginBottom:20
    }
  
});


