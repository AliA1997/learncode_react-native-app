import React, { PureComponent } from 'react';
import { KeyboardAvoidingView, Text } from 'react-native';
import Icon from  'react-native-vector-icons/FontAwesome5';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ProgrammingLanguagesActions from '../../../redux/reducers/ProgrammingLanguages/actions';
import Header from '../../../inputs/Header';
import Input from '../../../inputs/Input';
import Button from '../../../inputs/Button';
import ComponentWithNavbar from '../../../utilities/ComponentWithNavbar';
import formStyles from '../../../styles/form';

class StudentRegister extends PureComponent {
    static navigationOptions = {
        drawerLabel: 'Educator'
    }

    handleChange = (text, type) => {
        const form = Object.assign({}, this.props.form);
        form[type] = text;
        this.props.actions.changeStudentRegistration(form);
        console.log('form---------', form);
        return;
    }

    render() {
        const { form } = this.props;
        return (
            <ComponentWithNavbar type='register'  title='(1/4) Basic Info'>
                <KeyboardAvoidingView>
                    <Header title="Info as a Student" />
                    <Text style={formStyles.label}>Display Name</Text>
                    <Input onChange={(text) => this.handleChange(text, 'displayName') } placeholder="Display Name" value={form["displayName"]}/>
                    <Text style={formStyles.label}>Email</Text>
                    <Input onChange={(text) => this.handleChange(text, 'email')} placeholder="Email" value={form["email"]}/>
                    <Text style={formStyles.label}>Intro</Text>
                    <Input onChange={(text) => this.handleChange(text, 'intro')} placeholder="Your Introduction" value={form["intro"]}/>
                    <Button title='Next - Education' type='Next' onPress={() => this.props.navigation.navigate('Student_Register_Two')} />
                </KeyboardAvoidingView>
            </ComponentWithNavbar>
        );
    }
}

const mapStateToProps = state => ({
    programmingLanguages: state.programmingLanguages.list,
    form: state.auth.studentRegistrationForm
});

const mapDispatchToProps = dispatch => {
    const combinedActions = Object.assign({}, ProgrammingLanguagesActions);
    return {
        actions: bindActionCreators(combinedActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentRegister);