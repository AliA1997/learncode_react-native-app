import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import navStyles from '../styles/navigatorStyles/stackNavigatorStyles';
import styles from '../styles/base';
import PropTypes from 'prop-types';

const Navbar = ({title, icon, toggle}) => {
    return (
        <View style={navStyles.navbar}>
            <TouchableOpacity style={navStyles.headerStyle}
            onPress={() => toggle()}>
                {icon}
            </TouchableOpacity>
            <Text style={navStyles.headerTextColor}>{title}</Text>
        </View>
    );
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
    toggle: PropTypes.func.isRequired
}

export default Navbar;