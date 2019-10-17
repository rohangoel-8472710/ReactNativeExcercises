import React from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    FlatList
} from 'react-native';

export default class Data extends React.Component {

    onPressEdit() {

    }
    onPressDelete() {

    }
    render() {
        return (
            <FlatList
                data={this.props.empRecord}
                contentContainerStyle={{ height: 200, flex: 1 }}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.listStyle}>

                            <View style={{ flexDirection: "row" }}>
                                <Text style={{ fontSize: 25, color: 'black', width: "30%" }}>Name</Text>
                                <Text style={{ fontSize: 25, color: 'black', width: "50%" }}>{item.name}</Text>
                            </View>

                            <View style={{ flexDirection: "row" }}>
                                <Text style={{ fontSize: 25, color: 'black', flex: 0.4 }}>Password</Text>
                                <Text style={{ fontSize: 25, color: 'black', flex: 0.6 }}>{item.password}</Text>
                            </View>

                            <View style={{ width:'20%', flexdirection: 'row', justifyContent:'flex-end' }}>
                                <Button title="edit"
                                    onPress={() => this.onPressEdit()}
                                    style={{ MarginEnd: 30 }}
                                />
                                <Button title="delete"
                                    onPressDelete={() => this.onPressDelete()}
                                    style={{ MarginEnd: 30 }} />
                            </View>

                        </View>
                    )
                }}
            />
        );
    }
}

const styles = StyleSheet.create({
    nameStyle: {
        fontSize: 50,
        color: 'black',
    },

    listStyle: {
        
        flexDirection: "column",
    }
});
