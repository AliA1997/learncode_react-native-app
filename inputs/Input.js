import React from 'react';
import formStyles from '../styles/form';
import * as configStyles from '../styles/config';
import { TextInput, View } from 'react-native';


const Input = ({onChange, type='', overrideContainerStyle={}, overrideInputStyle={},  placeholder}) => {
    return (
        <View style={[formStyles.inputContainer, overrideContainerStyle]}>
            <TextInput 
                placeholder={placeholder} 
                style={[formStyles.input, overrideInputStyle]}
                onChangeText={(text)=> onChange(text, type)}
                placeholderTextColor={configStyles.inputColor}
            />
        </View>
    );
};

export default Input;