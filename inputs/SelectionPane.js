import React from 'react';
import { View } from 'react-native';
import Header from './Header';
import baseStyles from '../styles/base';

const SelectionPane = ({children, title, overrideTitleStyles={}, overrideContainerStyles={}, overridePaneStyles={}}) => {
    return (
        <View style={[baseStyles.paneContainer, overrideContainerStyles]}>
            <Header title={title} overrideStyle={overrideTitleStyles}/>
            <View style={[baseStyles.pane, overridePaneStyles]}>
                {children}
            </View>
        </View>
    );
};

export default SelectionPane;