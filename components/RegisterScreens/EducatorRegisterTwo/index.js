import React, { PureComponent } from 'react';
import { Text } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';
import * as AuthActions from '../../../redux/reducers/Auth/actions';
import ComponentWithNavbar from '../../../utilities/ComponentWithNavbar';
import Header from '../../../inputs/Header';
import Input from '../../../inputs/Input';
import Button from '../../../inputs/Button';
import navStyles from '../../../styles/navigatorStyles/stackNavigatorStyles';
import formStyles from '../../../styles/form';
import styles from '../styles';


class EducatorRegisterTwo extends PureComponent {
    
    handleChange = (text, type) => {
        let form = Object.assign({}, this.props.form);
        form[type] = text;
        this.props.actions.changeEducatorRegistration(form);
        return;
    }


    render() {
        const { form } = this.props;
        return (
            <ComponentWithNavbar  type='stack'  title='(2/4) Education and Experience'>
               <KeyboardAwareScrollView contentContainerStyle={styles.scrollContainer} >
                    <Header title="Education and Experience" overrideStyle={styles.labelOverride}/>
                    <Text style={formStyles.label}>So as a educator what is the recent institution your graduated from?</Text>

                    <Input onChange={(text) => this.handleChange(text, 'educationInstitution')} type="Education" 
                    overrideInputStyle={styles.input} placeholder="Education Institution" value={form['educationInstitution']}/>

                    <Text style={formStyles.label}>What year did you graduate?</Text>

                    <Input onChange={(text) => this.handleChange(text, 'educationYearOfGraduation')} type="Education" 
                    overrideInputStyle={styles.input} placeholder="Education Year Of Graduation" value={form['educationYearOfGraduation']}/>

                    <Text style={formStyles.label}>What certificate/diploma/degree did you recieve?</Text>

                    <Input onChange={(text) => this.handleChange(text, 'educationCertificate')} type="Education" 
                    overrideInputStyle={styles.input} placeholder="Education Certificate" value={form['educationCertificate']}/>

                    <Text style={formStyles.label}>So as a educator how many years of programming experience do you have?</Text>
                    
                    <Input onChange={(text) => this.handleChange(text, 'experience')} type="Experience" 
                    overrideInputStyle={styles.input} placeholder="Programming Experience" value={form['experience']}/>
                    
                    {/* <Text style={formStyles.label}>Resume?</Text>                
                    
                    <Input onChange={() => console.log("Resume upload Change Input")} type="Resume upload" 
                    overrideInputStyle={styles.input} placeholder="Resume Upload"/> */}

                    <Button title="Next" type='Next' onPress={() => this.props.navigation.navigate('Educator_Register_Three')}/>
                </KeyboardAwareScrollView>
            </ComponentWithNavbar>
        );
    }
}

const mapStateToProps = state => ({
    form: state.auth.educatorRegistrationForm,
});

const mapDispatchToProps = dispatch => {
    const combinedActions = Object.assign({}, AuthActions);
    return {
        actions: bindActionCreators(combinedActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EducatorRegisterTwo);