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
  TouchableOpacity,
  Image,
  TextInput
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
//mark :- pages
import ImagePicker from 'react-native-image-picker';
export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      image_1:'',
      image_2:'',
      image_3:'',
      action1:false,
      action2:false,
      action3:false
    }
  }
  image_show(param){
     let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    console.log("function call",param)
    ImagePicker.showImagePicker(options, (response) => {
  //console.log('Response = ', response);
 
  if (response.didCancel) {
    console.log('User cancelled image picker');
  } else if (response.error) {
    console.log('ImagePicker Error: ', response.error);
  } else if (response.customButton) {
    console.log('User tapped custom button: ', response.customButton);
  } else {
    const source = { uri: response.uri };
 
    // You can also display the image using data:
    // const source = { uri: 'data:image/jpeg;base64,' + response.data };
 
    this.setState({
      avatarSource: source,
    });
    switch (param) {

      case 1:
        this.setState({image_1:source})
        this.setState({action1:true})
        break;

      case 2:
        this.setState({ image_2: source })
        this.setState({ action2: true })
        break;

      case 3:
        this.setState({ image_3: source })
        this.setState({ action3: true })
        break;
    }

  }
});

  }
  render(){
    return (
        <SafeAreaView style={{backgroundColor:'white',flex:1}}>
            <ScrollView>
            <View style={{flexDirection:'row',marginTop:20,justifyContent:'space-between'}}>
                  <TouchableOpacity style={{marginLeft:20}} onPress={()=>this.props.navigation.navigate("Your_style")}>
                      <Image style={{width:9,height:16,tintColor:'black'}}
                      source={require('../images/<_back_icone.png')} />
                  </TouchableOpacity>
                  <TouchableOpacity style={{marginRight:20}}
                  onPress={()=>this.props.navigation.navigate("Home")} >
                      <Image style={{width:16,height:16,tintColor:"black"}}
                      source={require('../images/Cross_icon.png')} />
                  </TouchableOpacity>
                  </View>
                  <Text style={{fontSize:36,fontWeight:'600',marginTop:20,marginLeft:20}}>Get a</Text>
                  <Text style={{fontSize:36,fontWeight:'600',marginLeft:20}}>Consultation</Text>
                  <View style={{marginTop:10}}>
                  <TextInput style={styles.text_inpute}
                  onChange ={()=>this.setState({})}
                  placeholder = 'Fashion Person' />
                  </View>
                  <TextInput style={styles.text_inpute}
                    onChange={() => this.setState({})}
                  placeholder = 'Address' />
                  <TextInput style={styles.text_inpute}
                    onChange={() => this.setState({})}
                  placeholder = 'City / Country' />
                  <TextInput style={styles.text_inpute}
                    onChange={() => this.setState({})}
                    keyboardType={'numeric'}
                  placeholder = 'Phone Number' />
                  <TextInput style={styles.text_inpute}
                    onChange={() => this.setState({})}
                  placeholder = 'Email' />
                  <TextInput style={styles.text_inpute}
                    onChange={() => this.setState({})}
                  placeholder = 'Profession / Company' />
                  <View style={{marginTop:10,flexDirection:'row',justifyContent:'space-around',marginLeft:20,marginRight:20}}>
                      <TouchableOpacity style={styles.show_image}
                      onPress={()=>this.image_show(1)} >
                          <View style={{position:'absolute'}}>
                            <Image style={styles.Image_view}
                          source={require('../images/image_icone.png')} />
                          </View>
                          {this.state.action1 ? <View style={{marginTop:10}}>
                            <Image style={styles.show_image}
                           source={this.state.image_1} />
                          </View>:null}
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.show_image}
                       onPress={() => this.image_show(2)} >
                          <View style={{position:'absolute'}}>
                            <Image style={styles.Image_view}
                          source={require('../images/image_icone.png')} />
                          </View>
                          {this.state.action2 ? <View style={{marginTop:10}}>
                            <Image style={styles.show_image}
                           source={this.state.image_2} />
                          </View> : null}
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.show_image} 
                         onPress={() => this.image_show(3)}>
                          <View style={{position:'absolute'}}>
                            <Image style={styles.Image_view}
                          source={require('../images/image_icone.png')} />
                          </View>
                          {this.state.action3 ? <View style={{marginTop:10}}>
                            <Image style={styles.show_image}
                           source={this.state.image_3} />
                          </View> : null}
                      </TouchableOpacity>
                  </View>
                  <TouchableOpacity style={styles.submit_view}>
                      <Text style={{fontSize:16,fontWeight:'bold',color:'white'}}>Submit</Text>
                  </TouchableOpacity>
                  
                  </ScrollView>
        </SafeAreaView>
      
    )
  }
}



const styles = StyleSheet.create({
  text_inpute:{height:60,
    marginLeft:20,
    fontSize:16,
    fontWeight:'500',
    marginRight:20,
    borderWidth:0.5,
    borderRadius:10,
    marginTop:15,
    padding:20,
    borderColor:'#E5E5E5',
},
    Image_view:{
        width:32,
        height:26,
        },
    show_image:{
        width:93,
        height:93,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#F2F2F2',
        marginBottom:10,
        borderRadius:15
    },
    submit_view:{marginTop:10,
        marginRight:20,
        marginLeft:20,
        height:55,
        borderRadius:15,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#F5879B',
        marginBottom:20
    }
});


