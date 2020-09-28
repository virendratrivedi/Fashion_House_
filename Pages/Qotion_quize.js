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
  FlatList,
  TouchableOpacity,
  
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
      item_image : require("../images/Group316.png"),
      back_image: require("../images/Group14.png"),
      Check_Action:false,
      check_bgcolor :false,
      count:'',
      selectedClients: [],
      demo:false,
     
      Item_data :''
      //id : uniqueId("prefix-"),

    }
  }
  guidGenerator() {
  var S4 = function () {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  };
  const demo = (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
  //console.log("data",demo)
}
  _renderCell = ({ item, index }) => {
    const { selectedClients, clientsArray } = this.state;
   // console.log('filter index', item)
    // var S4 = function (item) {
    //   return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    // };
    // this.state.id = (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
    // console.log("data_id", this.state.id)
    // console.log('item data ',item)
    let isSelected =
      selectedClients.filter(o => {
        return o.id === item.id;
      }).length > 0
        ? true
        : false;
       // console.log('filter index',isSelected)
    //this.setState({id:this.state.id });

    const backgroundColor = isSelected ? "#FA869B" : "#ffffff";
    return (
      <View style={{ flex:1, marginTop: 10, marginBottom: 10, alignItems:'center', justifyContent: 'center' }}>
        <View style={{ flexDirection: 'row' }}>
          <Image style={styles.list_image} resizeMode= 'cover'
            source={{ uri: item.title.image}} />
          <View style={{ backgroundColor: "white", width: '75%', height: 100, borderRadius: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
            <Text style={styles.List_itme}>{item.title.text}</Text>
            <TouchableOpacity style={{ borderWidth: 1, borderColor: '#cccccc', backgroundColor, marginBottom: 28, width: 24, height: 24, alignItems: 'center', justifyContent: 'center', borderRadius: 15 }}
              onPress={() => this._didSelectClient(item,index)} >
              {this.state.selectedClients ?
                <Image style={{ width: 14, height: 10, tintColor: 'white' }}
                  source={require('../images/Group297.png')} />
                : null}
            </TouchableOpacity>
          </View>
        </View>
      </View>
      
      )
  }
  

  _didSelectClient = (selectedItem ,index)=> {
    this.state.Item_data = index
    console.log(index)
    let selectedClients = this.state.selectedClients;
    let isItemSelected =
      selectedClients.filter(item => {
        return item.id.includes(selectedItem.id);
      }).length > 0
        ? true
        : false;

    if (isItemSelected) {
      const index = selectedClients.findIndex(
        obj => obj.id === selectedItem.id
      );
     // console.log("isitemselect ", index);
      selectedClients.splice(selectedItem.id, 1);
    } else {
     // console.log('item push',selectedClients)
      
        const index = selectedClients.findIndex(
          obj => obj.id === selectedItem.id
        );
       // console.log("isitemselect ", index);
        selectedClients.splice(index, 1);
     
      
        selectedClients.push(selectedItem);
     
     
     
    }
    // if (isItemSelected === id)
    //   this.setState({ selectedItem: null })
    // else
    //   this.setState({ selectedItem: id })
    // console.log("selected clinet ", selectedClients);
    this.setState({ selectedClients });
  };
  
  render(){
    const recive = this.props.route.params.send.questions[0];
    DATA= [
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: recive.options[0],
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: recive.options[0],
      },]
   // console.log('data recive',DATA)
    return (
      
      <ImageBackground style={{flex:1}}
      source={this.state.back_image} >
          <SafeAreaView>
           
          <TouchableOpacity style={{marginTop:20,marginLeft:25,marginBottom:20}}
              onPress={() => this.props.navigation.navigate('Car_Discription')} >
              <Image style={{width:9,height:16}}
                source={require("../images/<_back_icone.png")} />
          </TouchableOpacity>
          <Text style={styles.header_text}>{recive.question} </Text>
          {/* <Text style={styles.header_text}> for the user?</Text> */}
          <View style={{height:'60%',marginTop:20,marginLeft:10,marginRight:10}}>
              <FlatList
              data={DATA}
                keyExtractor={(item) => item.index}
               // ItemSeparatorComponent={this.FlatListItemSeparator}
              //extraData={
               // this.state.selectedId     // for single item
                //this.state.selectedIds    // for multiple items
             // }
                renderItem={this._renderCell} />
          </View>
          <TouchableOpacity style={styles.Next_button} onPress={() => this.props.navigation.navigate("Your_style", { Data_send: this.props.route.params,Data_agin:this.state.Item_data})} >
            <Text style={{ fontSize: 16, fontWeight: 'bold', color:'white'}}>Next</Text>
          </TouchableOpacity>
         </SafeAreaView>
      </ImageBackground>
      
        )
  }
}



const styles = StyleSheet.create({
  header_text:{
    fontSize:24,
    fontWeight:'600',
    marginTop:5,
    marginRight:60,
    justifyContent:'center',
    alignSelf:'center',
  },
  list_image :{
    width:72,
    height:85,
    borderRadius:10,
    overflow:'hidden'
},
notificton_image:{
      width:18,
      height:16,
      tintColor:'#CCCCCC'
  },
  List_itme:{
      fontSize:16,
      fontWeight:'600',
      alignItems:'center',
      width:'50%',
  },
  title :{
      fontSize:20
  },
  carousel_heder:{
    fontSize:16,
    fontWeight:"bold",
    color:"white"
  },
  Next_button:{width:100,
    height:60,
    marginTop:50,
    alignSelf:'flex-end',
    marginRight:20,
    borderRadius:20,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#F5879B',
    marginBottom:15,
  }
});


