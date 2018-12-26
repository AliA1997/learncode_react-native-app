import React, { Component } from 'react';
import Input from './Input';
import AutoComplete from 'react-native-autocomplete-input';
import PropTypes from 'prop-types';
import baseStyles from '../styles/base';
import formStyles from '../styles/form';

const AutoCompleteInput = ({data, value, onChangeText, renderItem, placeholder }) => (
    <AutoComplete 
        data={data}
        value={value}
        defaultValue=''
        renderItem={item => renderItem(item)}
        onChangeText={onChangeText}
        onShowResult={() => data.map(item => item.slice(0, 4).includes(value)).length}
        placeholder={placeholder}
        inputContainerStyle={{borderWidth: 0, borderColor: 'transparent'}}
        listContainerStyle={formStyles.autocompleteList}
        listStyle={formStyles.autocompleteListItem}
        renderTextInput={() => <Input onChange={onChangeText} placeholder={placeholder} value={value}/>}
        hideResults={!(data && data.length > 0)}
    />
);

AutoComplete.propTypes = {
    data: PropTypes.array.isRequired,
    value: PropTypes.string.isRequired,
    onChangeText: PropTypes.func.isRequired,
    renderItem: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired
}

export default AutoCompleteInput;