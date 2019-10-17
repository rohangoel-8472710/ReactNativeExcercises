import React from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
} from 'react-native';

export default class Ex extends React.Component {
    render() {
        return (
            <View style={{ flex: 1 , flexDirection: 'row'}}>
                <Image style={styles.imgStyle} source={{
                    uri: 'https://cdn-images-1.medium.com/max/2000/1*jDSr2IHN-xGs7mEX9CFkYQ.png'
                }}
                />
                <View style={styles.vStyle}>
                <Text style={{ fontSize: 20 }}>Devil of Diamonds</Text>
                <Text>The Audible Rupture</Text>
            </View>
            <Text style={styles.styleText}>4:10</Text>
            </View>
            
               
     );

    }

}
const styles = StyleSheet.create({
    imgStyle: {
        height: 100,
        width: 100,
        flex: 0.25,
    },
    vStyle:{
        flex:0.50,
        alignItems:'center',
    },
    styleText:{
        flex:0.25,
        alignItems:'flex-end',
    },
});