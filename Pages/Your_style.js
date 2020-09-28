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
  Image,
  TouchableOpacity
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

//mark :- pages

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render(){
    const recive = this.props.route.params.Data_send.send;
    const index_value = this.props.route.params.Data_agin;
    const recive_data = this.props.route.params.Data_send.send.results[index_value];
    
    console.log('data', this.props.route.params.Data_agin);
    return (
      <View style={{ backgroundColor: recive.color,flex:1}}>
          <SafeAreaView>
            <ScrollView>
              <View style={{flexDirection:'row',marginTop:20,justifyContent:'space-between'}}>
                  <TouchableOpacity style={{marginLeft:20}} onPress={()=>this.props.navigation.navigate("Qotion_quize")}>
                      <Image style={{width:9,height:16,tintColor:'white'}}
                      source={require('../images/<_back_icone.png')} />
                  </TouchableOpacity>
                  <TouchableOpacity style={{marginRight:20}}
                  onPress={()=>this.props.navigation.navigate("Home")} >
                      <Image style={{width:16,height:16}}
                      source={require('../images/Cross_icon.png')} />
                  </TouchableOpacity>
              </View>
              <Text style={{fontSize:16,fontWeight:'500',width:'90%',alignSelf:'center',color:'white',marginTop:40}}>{recive_data.description}</Text>
            <Text style={{ fontSize: 36, fontWeight: '600', marginTop: 20, alignSelf: 'center', width:'90%', color: 'white' }}>{recive_data.title}</Text>
              <View style={{alignSelf:'center',marginTop:20}}>
                  <Image style={{width:240,height:340,borderRadius:25}} resizeMode='contain'
                  source={{uri:recive_data.image}} />
              </View>
            <TouchableOpacity style={{ marginLeft: 20, marginBottom: 20,borderRadius:20,backgroundColor:'white',marginRight:20,height:60,justifyContent:'center',alignItems:'center',marginTop:100}}
              onPress={()=>this.props.navigation.navigate('Consultent')} >
                  <Text style={{fontSize:16,fontWeight:'bold'}}>Get a Consultation</Text>
              </TouchableOpacity>
          </ScrollView>
          </SafeAreaView>
      </View>
    )
  }
}



const styles = StyleSheet.create({
  
});


