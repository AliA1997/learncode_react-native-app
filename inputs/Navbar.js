import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import navStyles from '../styles/navigatorStyles/stackNavigatorStyles';
import styles from '../styles/base';
import PropTypes from 'prop-types';

const Navbar = ({title, icon, toggle}) => {
    return (
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', paddingBottom: 10,
            backgroundColor: 'green', position: 'absolute', top: 0, height: 100, width: '100%', zIndex: 100}}>
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