import React, { PureComponent } from 'react';
import { KeyboardAvoidingView, Text } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AuthActions from  '../../../redux/reducers/Auth/actions';
import Button from '../../../inputs/Button';
import Input from '../../../inputs/Input';
import Header from '../../../inputs/Header';
import ComponentWithNavbar from '../../../utilities/ComponentWithNavbar';
import formStyles from '../../../styles/form';
import styles from '../styles';
import PropTypes from 'prop-types';


class StudentRegisterTwo extends PureComponent {

    static navigationOptions = {
        drawerLabel: "Student Page Two"
    }

    handleChange = (text, type) => {
        const form = Object.assign({}, this.props.form);
        form[type] = text;
        this.props.actions.changeStudentRegistration(form);
        return;
    }

    render() {
        const { form } = this.props;
        return (
            <ComponentWithNavbar type='stack' title='(2/4) Education'>
                <KeyboardAvoidingView  style={styles.scrollContainer}>
                    <Header title="Education?" overrideStyle={styles.labelOverride}/>

                    <Text style={formStyles.label}>What education institution did you attend for your most recent certificate?</Text>

                    <Input onChange={() => this.handleChange(text, 'educationInstitution')} type="Education" 
                    overrideInputStyle={styles.input} placeholder="education" value={form['educationInstitution']}/>

                    <Text style={formStyles.label}>What education certificate did you recieve?</Text>

                    <Input onChange={() => this.handleChange(text, 'educationCertificate')} type="Education" 
                    overrideInputStyle={styles.input} placeholder="education" value={form['educationCertificate']}/>
                    
                    <Text style={formStyles.label}>What was the year of graduation?</Text>

                    <Input onChange={() => this.handleChange(text, 'educationYearOfGraduation')} type="Education" 
                    overrideInputStyle={styles.input} placeholder="education" value={form['educationYearOfGraduation']}/>

                    <Button title="Next - Coding Info" type='Next' onPress={() => this.props.navigation.navigate('Student_Register_Three')} />
                </KeyboardAvoidingView>
            </ComponentWithNavbar>
        );
    }
}

const mapStateToProps = state => ({
    form: state.auth.studentRegistrationForm
})

const mapDispatchToProps = dispatch => {
    const combinedActions = Object.assign({}, AuthActions);
    return {
        actions: bindActionCreators(combinedActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentRegisterTwo);