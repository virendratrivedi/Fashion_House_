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
  FlatList,
  TouchableOpacity,
  Image,
  ImageBackground,
  Dimensions
} from 'react-native';

import Discription from "../Pages/Discription.js";
import Car_Discription from "../Pages/Car_Discription";

import Carousel, { Pagination } from 'react-native-snap-carousel';
import { scrollInterpolators, animatedStyles } from './animations';
import styless, { colors } from './index.style';
import { sliderWidth, itemWidth } from './SliderEntry.style';
const SLIDER_1_FIRST_ITEM = 0;
export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        DATA : [
            {
              id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
              title: 'Burning desire golden',
              Subtitle:"key or red herring",
              lov:"43"
            },
            {
              id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
              title: 'Second Item',
            },
            {
              id: '58694a0f-3da1-471f-bd96-145571e29d72',
              title: 'Third Item',
            },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Third Item',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Third Item',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Third Item',
        },
          ],
          videos: [
            {
             // id: "WpIAc9by5iU",
              thumbnail: require("../images/face_image.png"),
              title_fac: "Fashion",
              Subtitle_fac:'Personality'
            }, {
              //id: "sNPnbI1arSE",
              thumbnail: require("../images/Right_icon.png"),
              title: "Your style",
              Subtitle:"personality",
              Subtitle1:"is Modern",
              Subtitle2:"Feminine",
              Subtitle3:"YOUR RESULT"
            }, {
             // id: "VOgFZfRVaww",
              thumbnail: require("../images/Image_Pic.png"),
             // title: "afasfdas"
            },
            {
             // id: "VOgFZfRVaww",
              thumbnail: require("../images/Image_Pic.png"),
             // title: "afasfdas"
            },
          ],
          slider1ActiveSlide: SLIDER_1_FIRST_ITEM,
          listData : ""

    }
  }
  Item_disc (){

  }
  _renderItem = ({item, index},parallaxProps) => {
    console.log("recive data", item);
    console.log("index ",index)
    let Image_Http_URL = { uri: "https://s1.r29static.com/bin/entry/5d6/x,80/1697806/image.png" };
    return (
      
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Car_Discription', { send: item})} >
                <ImageBackground style={{width:150,height:200,borderRadius:20,overflow:'hidden'}} resizeMode='cover'
                  source={ Image_Http_URL }>
                  <View style={{marginTop:80,marginLeft:20}}>
                  <Text style={{ fontSize: 12, fontWeight: '600', marginBottom: 10, color:'#FDC3CD'}}>{item.Subtitle3}</Text>
                  <Text style={styles.carousel_heder}>{item.name}</Text>
                  <Text style={styles.carousel_heder}>{item.Subtitle}</Text>
                  <Text style={styles.carousel_heder}>{item.Subtitle1}{item.title_fac}</Text>
              <Text style={{fontSize: 16,fontWeight: "bold",marginBottom:5,color: "white",}}>{item.Subtitle2}{item.Subtitle_fac}</Text>
                 </View>
                </ImageBackground>
           
            </TouchableOpacity>
        
    );
}
componentDidMount (){
    fetch('https://api.jsonbin.io/b/5f0561755d4af74b01287bb1')
    .then((response) => response.json())
    .then((json) => {
        //console.log("api data",json)
        //listData=json;
        this.setState({listData:json})
      //return json.movies;
    })
    .catch((error) => {
      console.error(error);
    });
}

  render(){
    const { slider1ActiveSlide } = this.state;
    console.log(this.state.listData);
    return (
      <ImageBackground style={{flex:1}}
          source={require("../images/Group14.png")} >
          <SafeAreaView>
          <Text style={{ fontSize: 36, fontWeight: "500",marginLeft:20,marginTop:20}}>Take</Text>
            <Text style={styles.header}>the test</Text>
            <View style={{ justifyContent: 'center', alignItems: 'center',marginLeft:40 }}>
            <Carousel
                        ref={a => this._slider1Ref = a}
                        data={this.state.listData}
                        renderItem={this._renderItem}
                        sliderWidth={sliderWidth}
                        itemWidth={170}
                        activeSlideAlignment={'start'}
                        hasParallaxImages={false}
                        firstItem={SLIDER_1_FIRST_ITEM}
                        inactiveSlideScale={1}
                        inactiveSlideOpacity={1.0}
                        //inactiveSlideShift={-20}
                        containerCustomStyle={styless.slider}
                        contentContainerCustomStyle={styless.sliderContentContainer}
                        loop={false}
                        loopClonesPerSide={2}
                        //autoplay={false}
                        // autoplayDelay={500}
                        // autoplayInterval={3000}
                        onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index })}
                    />
            </View>
            <View style={{ marginTop: 10, height: 20,marginBottom:10 }}>
                    <Pagination
                        dotsLength={this.state.videos.length}
                        activeDotIndex={slider1ActiveSlide}
                        containerStyle={styless.paginationContainer}
                        dotColor={'#FA869B'}
                        dotStyle={styless.paginationDot}
                        inactiveDotColor={colors.black}
                       // inactiveDotOpacity={0.4}
                        //inactiveDotScale={0.4}
                        carouselRef={this._slider1Ref}
                        tappableDots={!!this._slider1Ref}
                    //renderDots={this._renderDot}
                    />
                </View>
          <Text style={{ fontSize: 24, fontWeight: "600", marginLeft:20}}>Posts and tips</Text>
            <View style={{height:'50%',marginTop:20}}>
                <FlatList
                data={this.state.DATA}
                renderItem={(item)=><TouchableOpacity onPress = {()=> this.props.navigation.navigate("Discription")} style={{marginLeft:20,marginTop:5,alignContent:'center',justifyContent:'center',marginBottom:20}}>
                    <View style={{flexDirection:'row'}}>
                        <Image style={styles.list_image} resizeMode='cover'
                      source={require("../images/eye_image.png")} />
                        <View style={{marginLeft:20}}>
                            <Text style={{ fontSize: 12, fontWeight: '600',color:"#F5879B",marginBottom:10}}>CATEGORY</Text>
                            <Text style={styles.List_itme}>Burning desire golden</Text>
                            <Text style={styles.List_itme}>key or red herring</Text>
                            <View style={{flexDirection:'row',marginTop:8}}>
                                <Image style={styles.notificton_image}
                                source={require("../images/Hart_icon.png")} />
                                <Text style={{marginLeft:5,marginRight:10,fontSize:12,fontWeight:'500',color:"#CCCCCC"}}>43</Text>
                                <Image style={styles.notificton_image}
                                source={require("../images/Time_icon.png")} />
                                <Text style={{marginLeft:5,marginBottom:5,fontSize:12,fontWeight:'500',color:"#CCCCCC"}}>5 mins ego</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>} />
            </View>
            </SafeAreaView>
      </ImageBackground>
    )
  }
}



const styles = StyleSheet.create({
  
  header :{
      fontSize:36,
      fontWeight:"500",
      marginLeft:20,
    
  },
  list_image :{
      width:80,
      height:80,
      borderRadius:20,
  },
  notificton_image:{
      width:18,
      height:16,
      tintColor:'#CCCCCC'
  },
  List_itme:{
      fontSize:16,
      fontWeight:'600',
      marginTop:3,
  },
  title :{
      fontSize:20
  },
  carousel_heder:{
    fontSize:16,
    alignItems:'center',
    marginTop:10,
    width:'60%',
    fontWeight:"bold",
    color:"white",
  }
});


