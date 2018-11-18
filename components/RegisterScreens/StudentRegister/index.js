import React, { PureComponent } from 'react';
import { View, ScrollView, Text } from 'react-native';
import Header from '../../../inputs/Header';
import Input from '../../../inputs/Input';
import Button from '../../../inputs/Button';
import styles from '../styles';
import formStyles from '../../../styles/form';
import SelectionPane from '../../../inputs/SelectionPane';

export default class EducatorRegister extends PureComponent {
    static navigationOptions = {
        drawerLabel: 'Educator'
    }
    render() {
        return (
            <View  style={styles.scrollContainer}>
                <ScrollView contentContainerStyle={{alignItems: 'center'}}>
                    <Header title="Education?" overrideStyle={styles.labelOverride}/>
                    <Text style={formStyles.label}>So as a student what education  you have?</Text>

                    <Input onChange={() => console.log("Education Change Input")} type="Education" 
                    overrideInputStyle={styles.input} placeholder="education"/>
                    
                    <Text style={formStyles.label}>So as a student what programming languages you would prefer? </Text>
                    
                    <Input onChange={() => console.log("Favorite PLs")} type="Favorite PLs" 
                    overrideInputStyle={styles.input} placeholder="FavoritePLs"/>

                    <SelectionPane title="Favorite Programming Languages">
                        <Text style={styles.label}>No Languages picked.</Text>
                    </SelectionPane>
                </ScrollView>
            </View>
        );
    }
}