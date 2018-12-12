import React, { PureComponent } from 'react';
import { View, ScrollView, Text, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import * as AjaxCreators from '../../../constants/ajaxCallCreators';
import * as Config from '../../../utilities/config';
import Header from '../../../inputs/Header';
import Input from '../../../inputs/Input';
import Button from '../../../inputs/Button';
import Card from '../../../inputs/Card';
import AutoComplete from '../../../inputs/AutoComplete';
import styles from '../styles';
import formStyles from '../../../styles/form';
import SelectionPane from '../../../inputs/SelectionPane';

export default class EducatorRegister extends PureComponent {
    
    static navigationOptions = {
        drawerLabel: 'Educator'
    }


    render() {
        console.log('this.props.navigation-------------', this.props.navigation);
        return (
            <View style={styles.scrollContainer} >
                <ScrollView contentContainerStyle={{alignItems: 'center'}}>
                    <Header title="Education and Experience" overrideStyle={styles.labelOverride}/>
                    <Text style={formStyles.label}>So as a educator what education  you have?</Text>

                    <Input onChange={() => console.log("Education Change Input")} type="Education" 
                    overrideInputStyle={styles.input} placeholder="Education"/>
                    
                    <Text style={formStyles.label}>So as a educator how many years of programming experience do you have?</Text>
                    
                    <Input onChange={() => console.log("Experience Change Input")} type="Experience" 
                    overrideInputStyle={styles.input} placeholder="Experience"/>
                    
                    <Text style={formStyles.label}>Resume?</Text>                
                    
                    <Input onChange={() => console.log("Resume upload Change Input")} type="Resume upload" 
                    overrideInputStyle={styles.input} placeholder="Resume Upload"/>

                    <Button  title="Next" onPress={() => this.props.navigation.navigate('Register_Two')}/>
                </ScrollView>
            </View>
        );
    }
}