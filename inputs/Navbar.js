import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default ({toggle}) => {
    return (
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', paddingBottom: 10,
            backgroundColor: 'green', position: 'absolute', top: 0, height: 100, width: '100%', zIndex: 100}}>
            <TouchableOpacity style={{borderRadius: 50, borderWidth: 5, borderColor: 'black', backgroundColor: 'white', height: 50, width: 50}}
            onPress={() => toggle()}>

            </TouchableOpacity>
            <Text style={{marginTop: 39}}>Nav</Text>
        </View>
    );
}