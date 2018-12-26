import React from 'react';
import formStyles from '../styles/form';
import * as configStyles from '../styles/config';
import { TextInput, View } from 'react-native';
import PropTypes from 'prop-types';


const Input = ({onChange, type='', overrideContainerStyle={}, overrideInputStyle={},  placeholder, value}) => {
    let input;
    if(type === 'password') {
        input = <TextInput 
                    placeholder={placeholder} 
                    style={[formStyles.input, overrideInputStyle]}
                    onChangeText={onChange}
                    placeholderTextColor={configStyles.inputColor}
                    value={value}
                    secureTextEntry
                />   
    } else if(type === 'number') {
        input = <TextInput 
                    placeholder={placeholder} 
                    style={[formStyles.input, overrideInputStyle]}
                    onChangeText={onChange}
                    placeholderTextColor={configStyles.inputColor}
                    value={value}
                    keyboardType="numeric"
                />    
    } else {
        input = <TextInput 
                    placeholder={placeholder} 
                    style={[formStyles.input, overrideInputStyle]}
                    onChangeText={onChange}
                    placeholderTextColor={configStyles.inputColor}
                    value={value}
                />   
    }
    return (
        <View style={[formStyles.inputContainer, overrideContainerStyle]}>
            {/* <TextInput 
                placeholder={placeholder} 
                style={[formStyles.input, overrideInputStyle]}
                onChangeText={(text)=> onChange(text, type)}
                placeholderTextColor={configStyles.inputColor}
            /> */}
            {input}
        </View>
    );
};

Input.propTypes = {
    onChange: PropTypes.func.isRequired,
    type: PropTypes.string,
    overrideContainerStyle: PropTypes.object,
    overrideInputStyle: PropTypes.object,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string
}

export default Input;