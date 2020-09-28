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
    constructor(props) {
        super(props);
        this.state = {
            DATA :[
                {
                    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
                    title: 'First Item',
                },
                {
                    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
                    title: 'Second Item',
                },
                {
                    id: '58694a0f-3da1-471f-bd96-145571e29d72',
                    title: 'Third Item',
                },
            ],
            selectedClients: [],
            

        }
    }
    _renderCell = ({ item, index }) => {
        const { selectedClients, clientsArray } = this.state;
        let isSelected =
            selectedClients.filter(o => {
                return o.id === item.id;
            }).length > 0
                ? true
                : false;
                
       // console.log('slected clinet', selectedClients);
        //change your UI based on the 'isSelected' value
        return (
            <TouchableOpacity style={{marginTop:20}}
                //activeOpacity={Constants.ACTIVE_OPACITY}
                onPress={() => {
                    this._didSelectClient(item);
                }}
            >
                {<Text>{item.id}</Text>

                    //Your component
                }
            </TouchableOpacity>)
 }


    _didSelectClient = selectedItem => {
        let selectedClients = this.state.selectedClients;
        let isItemSelected =
            selectedClients.filter(item => {
                return item.id.includes(this.state.id);
            }).length > 0
                ? true
                : false;
       
        if (isItemSelected) {
            const index = selectedClients.findIndex(
                obj => obj.id === this.state.id
            );
            console.log("isitemselect ",index);
            selectedClients.splice(index, 1);
        } else {
            selectedClients.push(selectedItem);
        }
        console.log("selected clinet ", selectedClients);
        this.setState({ selectedClients });
    };

    render() {
        return (
            
            <FlatList 
                style={{ flex: 1 }}
                data={this.state.DATA}
                renderItem={this._renderCell}
                keyExtractor={(item, index) => index.toString()}
                extraData={this.props}
                ListEmptyComponent={this._renderEmptyComponent}
            />
            
        )
    }
}



const styles = StyleSheet.create({

});


