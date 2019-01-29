import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import EntypoIcon  from 'react-native-vector-icons/Entypo';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import baseStyles from '../styles/base';


const SearchBar = ({iconTexts}) => {
    return (
        <View>
            {iconTexts.length ? 
                iconTexts.map(iconText => {
                    if(iconText === 'tutorial') {
                        return (
                            <TouchableOpacity style={baseStyles.searchBarIconContainer}>
                                <EntypoIcon name="book" size={30} color="#FFFFFF" />
                            </TouchableOpacity>
                        );
                    }
                    if(iconText === 'educator') {
                        return (
                            <TouchableOpacity style={baseStyles.searchBarIconContainer}>
                                <MaterialIcon name="teach" size={30} color="#FFFFFF" />
                            </TouchableOpacity>    
                        );
                    }
                    if(iconText === 'student') {
                        return (
                            <TouchableOpacity style={baseStyles.searchBarIconContainer}>
                                <EntypoIcon name="graduation-cap" size={30} color="#FFFFFF" />
                            </TouchableOpacity>
                        );
                    }
                })
                : null}
        </View>
    );
};

export default SearchBar;