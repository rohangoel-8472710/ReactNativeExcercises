import React from 'react';
import {
    View, 
    Text,
    TextInput, 
    Button,
    StyleSheet
} from 'react-native';

import Data from './Data';

export default class Form extends React.Component {
    constructor(){
        super()
        this.state = {
            name: '',
            password: '',
            empRecord: []
        }
    }

    onPress(){
        let playLoad = {
            name:this.state.name,
            password:this.state.password
        };
        let empRecord = this.state.empRecord;
        empRecord.push(playLoad);
        this.setState({
            empRecord : empRecord
        })
    }

    render() {
        return (
            <View style ={{flex:1}}>
                <View style={{ flexDirection: "row", justifyContent: "center", backgroundColor: "blue" }}>
                    <Text style={{ fontSize: 30, fontStyle: 'italic' }}>First Sample</Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: 'space-evenly' }}>
                    <Text style={{margin:10, fontSize: 18, fontStyle: 'normal' }}>NAME</Text>
                    <TextInput style={styles.styleTextInput}
                        placeholder = 'Name'
                        onChangeText = {text => this.setState({ name:text})}>

                    </TextInput>
                </View>
                <View style={{ flexDirection: "row", justifyContent: 'space-evenly' }}>
                    <Text style={{margin:10, fontSize: 18, fontStyle: 'normal' }}>PASSWORD</Text>
                    <TextInput style={styles.styleTextInput}
                        placeholder = 'Name'
                        onChangeText = {pass => this.setState({ password:pass})}>
                    </TextInput>
                </View>
                <Button 
                    title='Login'
                    onPress={() => this.onPress()}
                    color="green" 
                    accessibilityLabel="Login"
                    style={styles.btnStyle} />
                <View style={ {flex:1, AlignItems:'center', marginTop:10}}>
                    <Data empRecord = {this.state.empRecord}/>
                </View>    
            </View>
        );
    }

}



const styles = StyleSheet.create({
    btnStyle: {
        padding: 10,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 10,
        shadowOpacity: 0.25
    },

    styleTextInput: {
        margin:10, 
        backgroundColor:'gray', 
        borderRadius: 62.5, 
        paddingStart: 30,
        paddingEnd: 30
    }
});
