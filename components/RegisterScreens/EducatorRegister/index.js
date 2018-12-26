import React, { PureComponent } from 'react';
import { Text, KeyboardAvoidingView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as AuthActions from '../../../redux/reducers/Auth/actions';
import Header from '../../../inputs/Header';
import Input from '../../../inputs/Input';
import Button from '../../../inputs/Button';
import ComponentWithNavbar from '../../../utilities/ComponentWithNavbar';
import styles from '../styles';
import formStyles from '../../../styles/form';
import navStyles from '../../../styles/navigatorStyles/stackNavigatorStyles';

class EducatorRegister extends PureComponent {
    
    static navigationOptions = {
        drawerLabel: 'Educator'
    }

    handleChange = (text, type) => {
        const form = Object.assign({}, this.props.form);
        form[type] = text;
        this.props.actions.changeEducatorRegistration(form);
    }

    render() {
        const { form } = this.props;
        return (
            <ComponentWithNavbar type='register'  title='(1/3) Basic Info'>
                <KeyboardAvoidingView>
                    <Header title="Info as a Educator" />
                    <Text style={formStyles.label}>Display Name</Text>
                    <Input onChange={(text) => this.handleChange(text, 'displayName') } placeholder="Display Name" value={form["displayName"]}/>
                    <Text style={formStyles.label}>Email</Text>
                    <Input onChange={(text) => this.handleChange(text, 'email')} placeholder="Email" value={form["email"]}/>
                    <Text style={formStyles.label}>Intro</Text>
                    <Input onChange={(text) => this.handleChange(text, 'intro')} placeholder="Your Introduction" value={form["intro"]}/>
                    <Button title='Next - Education' onPress={() => this.props.navigation.navigate('Educator_Register_Two')} />
                </KeyboardAvoidingView>
            </ComponentWithNavbar>
        );
    }
}

const mapStateToProps = state => ({
    form: state.auth.educatorRegistrationForm
});

const mapDispatchToProps = dispatch => {
    const combinedActions = Object.assign({}, AuthActions);
    return {
        actions: bindActionCreators(combinedActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EducatorRegister);