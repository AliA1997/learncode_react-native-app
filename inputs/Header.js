import React from 'react';
import { Text } from 'react-native';
import formStyles from '../styles/form';
 

const Header = ({title, overrideStyle={}}) => (
    <Text style={[formStyles.label, formStyles.header, overrideStyle]}>
        {title}
    </Text>
)

export default Header;