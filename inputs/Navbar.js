import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import navStyles from '../styles/navigatorStyles/stackNavigatorStyles';

export default ({toggle}) => {
    return (
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', paddingBottom: 10,
            backgroundColor: 'green', position: 'absolute', top: 0, height: 100, width: '100%', zIndex: 100}}>
            <TouchableOpacity style={navStyles.headerStyle}
            onPress={() => toggle()}>

            </TouchableOpacity>
            <Text style={navStyles.headerTextColor}>{'<LearnCode />'}</Text>
        </View>
    );
}