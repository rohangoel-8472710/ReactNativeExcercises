import React from 'react';
import{
    View,
    Text,
    Button,
    StyleSheet,
    FlatList
} from 'react-native';

export default class Data extends React.Component{
    render(){
        return(
            <View style = {{flex:1, backgroundColor:'red'}}>
               <FlatList 
                  data = {this.props.empRecord}
                  contentContainerStyle = {{height:200, flex:1}}
                  renderItem = {({item}) => {
                      return(
                          <View>
                              <Text style = {{fontSize:25, color:'black'}}>Name = {item.name}</Text>
                              <Text style = {{fontSize:25, color:'black'}}> Password = {item.password}</Text>
                          </View>
                      )
                  }}
               />
            </View>
        ); 
    }
}

const styles = StyleSheet.create({
   nameStyle:{
       fontSize: 50,
       color:'black',
   }
});