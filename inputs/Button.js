import React from 'react';
import formStyles from '../styles/form';
import { TouchableOpacity, Text, Image, View } from 'react-native';

const Button = ({title, type='Login', overrideStyles=null, overrideTextStyles=null, image, onPress}) => {
    return (
        <TouchableOpacity 
        style={[formStyles.loginButton, overrideStyles]}
        onPress={onPress}
       >
            {type === 'Login' ?
                <Text style={[formStyles.loginButtonTextColor, overrideTextStyles]}>
                    {title}
                </Text>
            :        
                <View>
                    {/* <Image source={title === 'Educator' ? '' : require('../ass/ets/student-btn.svg')} style={formStyles.registerImage}/> */}
                    <Text style={[formStyles.loginButtonTextColor, overrideTextStyles]}>
                        {title}
                    </Text>
                </View>
            }
            
       </TouchableOpacity> 
    );
};

export default Button;