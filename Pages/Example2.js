import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    ActivityIndicator,
    Image,
    TouchableOpacity,
    CheckBox,
    
} from 'react-native';

export default class app extends Component {
    constructor(props) {
        super(props);

        this.state = {
            checked: false,
            delivered: { checked: true }
        };
    }

    
    onChangeCheck() {
        console.log('function is run')
        this.setState({ checked: !this.state.checked })
    }
    
    render() {
        //const [isSelected, setSelection] = thisfalse;
        //const setChecked = "true";
        //const checked = false;
       // const [checked, setChecked] = React.useState(false);
       console.log(this.state.delivered)
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'column' }}>
                    
                    <View style={{ flexDirection: 'row' }}>
                        <CheckBox
                            style={styles.checkbox}
                            title='Delivered'
                            value={this.state.checked}
                            onValueChange={() => this.setState({ checked: !this.state.checked })}
                            //onChange={() => this.onChangeCheck()} 
                            />
                        <Text style={{ marginTop: 5 }}> this is checkbox</Text>
                    </View>
                </View>
            </View>
        );
    
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
    },
    checkbox: {
        alignSelf: "center",
        height:50,width:50,borderRadius:20
    },
    label: {
        margin: 8,
    },
});