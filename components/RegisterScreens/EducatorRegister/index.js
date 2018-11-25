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
        console.log('this.props.navigation-------------', this.props.navigation);
        return (
            <View style={styles.scrollContainer} >
                <ScrollView contentContainerStyle={{alignItems: 'center'}}>
                    <Header title="Education and Experience" overrideStyle={styles.labelOverride}/>
                    <Text style={formStyles.label}>So as a educator what education  you have?</Text>

                    <Input onChange={() => console.log("Education Change Input")} type="Education" 
                    overrideInputStyle={styles.input} placeholder="education"/>
                    
                    <Text style={formStyles.label}>So as a educator how many years of programming experience do you have?</Text>
                    
                    <Input onChange={() => console.log("Experience Change Input")} type="Experience" 
                    overrideInputStyle={styles.input} placeholder="experience"/>
                    
                    <Text style={formStyles.label}>Resume?</Text>                
                    
                    <Input onChange={() => console.log("Resume upload Change Input")} type="Resume upload" 
                    overrideInputStyle={styles.input} placeholder="resume upload"/>
                    
                    <Text style={formStyles.label}>So as a educator what are programming languages of your expertise?</Text>
                    
                    <Input onChange={() => console.log("PL of expertise Change Input")} type="PL of expetise" 
                    overrideInputStyle={styles.input} placeholder="pl of expertise"/>
                    
                    <Text style={formStyles.label}>So as a educator what are your favorite programming languages?</Text>
                    
                    <Input onChange={() => console.log("Favorite PLs")} type="Favorite PLs" 
                    overrideInputStyle={styles.input} placeholder="FavoritePLs"/>
                    <SelectionPane title="Programming Languages of Expertise"  overrideTitleStyles={formStyles.label}>
                        <Text style={styles.label}>No Languages picked.</Text>
                    </SelectionPane>
                    <SelectionPane title="Favorite Programming Languages" overrideTitleStyles={formStyles.label}>
                        <Text style={styles.label}>No Languages picked.</Text>
                    </SelectionPane>
                    <Button  title="Next" onPress={() => this.props.navigation.navigate('StepTwo')}/>
                </ScrollView>
            </View>
        );
    }
}