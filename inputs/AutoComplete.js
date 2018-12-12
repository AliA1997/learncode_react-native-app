import React, { Component } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import Input from './Input';
import AutoComplete from 'react-native-autocomplete-input';
import PropTypes from 'prop-types';
import baseStyles from '../styles/base';
import formStyles from '../styles/form';

const AutoCompleteInput = ({data, valueObj, value, onChangeText, renderItem, placeholder }) => (
    <AutoComplete 
        data={data}
        defaultValue={value}
        onChangeText={text => onChangeText(text)}
        renderItem={item => renderItem(item)}
        placeholder={placeholder}
        containerStyle={formStyles.inputContainer}
        inputContainerStyle={formStyles.input}
        listContainerStyle={{width: 350}}
        hideResults={!(data && data.length > 0)}
    />
);

AutoComplete.propTypes = {
    data: PropTypes.array.isRequired,
    valueObj: PropTypes.object.isRequired,
    value: PropTypes.string.isRequired,
    onChangeText: PropTypes.func.isRequired,
    renderItem: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired
}

export default AutoCompleteInput;