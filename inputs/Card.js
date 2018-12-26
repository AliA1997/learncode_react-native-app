import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import _ from 'lodash';
import PropTypes from 'prop-types';
import * as utilities from '../utilities/functions';
import styles from '../styles/card';

const Card = ({type, objToMap={}, icon=<Text/>, overrideStyles={}, overrideImageStyles={}, onPress=() => console.log('Default Click')}) => {
    const image = type === "tutorial" ? utilities.getTutorialIcon(objToMap.subject) : null;
    console.log("Card Image-------------", image);
    //Delete your criticisms property since it will not displayed only rating.
    const hasCriticism = objToMap['criticisms'] && objToMap['criticisms'].length > 0;
    delete objToMap['criticisms'];
    //And delete your link property since it will not be display and will route to that link using the view.
    const link = objToMap['link'];
    delete objToMap['link']; 
    return (
        <TouchableOpacity style={[styles.container, overrideStyles]} 
        onPress={() => {
                if(type === 'register-fav-pl')
                    return onPress('favoriteProgrammingLanguages', objToMap);
                else if(type === 'register-pl-of-expertise')
                    return onPress('programmingLanguageOfExpertise', objToMap);
            }
        }>
            <View style={[styles.imageContainer, overrideImageStyles]}>
                <Image style={styles.image} source={{uri: image ? image : objToMap.image}}/>
            </View>
            {/* Do not the display the link based if the key is link */}
            <View style={[styles.subContainer, styles.keyContainer]}>
            {
                type === 'tutorial' ? 
                Object.keys(objToMap).map((key, i) => (
                    <Text key={i} style={[styles.text, styles.keyText]}>
                        {_.capitalize(key)}: 
                    </Text>
                ))
                : 
                type.includes('register') ?
                <TouchableOpacity style={styles.listCard}>
                    <Text style={styles.listCardText}>
                        {_.capitalize(objToMap.name)}
                    </Text>
                    {icon}
                </TouchableOpacity>
                : null 
            }
            </View>
            {/* Do not display the value if it has tutorials since that a characteristics all links have. */}
            <View style={[styles.subContainer, styles.valueContainer]}>
            {
                type === 'tutorial' ? 
                Object.values(objToMap).map((value, i) => (
                    <Text key={i} style={styles.text}>
                        {typeof value == 'string' ?
                             _.capitalize(value).length > 21 ?
                                _.capitalize(value).slice(0, 18) + '...' 
                                : _.capitalize(value)
                            : hasCriticism ? 
                                value + '/5' 
                                : 'No Criticsms Yet'}
                    </Text>
                ))
                : null
            }
            </View>
        </TouchableOpacity>
    );
};

Card.propTypes = {
    type: PropTypes.string.isRequired,
    objToMap: PropTypes.object,
    icon: PropTypes.element.isRequired,
    overrideStyles: PropTypes.object,
    overrideImageStyles: PropTypes.object,
    onPress: PropTypes.func,
};

export default Card;