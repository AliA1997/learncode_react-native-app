import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity, Text, Image, View } from 'react-native';
import formStyles from '../styles/form';
import navStyles from '../styles/navigatorStyles/stackNavigatorStyles';

const Button = ({title, type='Login', overrideStyles=null, overrideTextStyles=null, image, onPress}) => {
    let icon;
    if(title ==='Student') 
        icon = <Icon name="user-graduate" size={30} />;
    else if(title === 'Educator') 
        icon = <Icon name="chalkboard-teacher" size={30} />;
    else if(type === 'Next') 
        icon = <Icon name="angle-right" size={30} color='white' style={navStyles.navIcon}/>

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
                <View style={{flexDirection: type === 'Next' ? 'row-reverse' : 'row', justifyContent: type === 'Next' ? 'space-between' : 'space-around', alignItems: 'center', width: '50%'}}>
                    {icon}
                    <Text style={[formStyles.loginButtonTextColor, overrideTextStyles]}>
                        {title}
                    </Text>
                </View>
            }
            
       </TouchableOpacity> 
    );
};

export default Button;