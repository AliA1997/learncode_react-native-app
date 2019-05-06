import React, { PureComponent } from 'react';
import { KeyboardAvoidingView, Text } from 'react-native';
import Icon from  'react-native-vector-icons/FontAwesome5';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ProgrammingLanguagesActions from '../../../redux/reducers/ProgrammingLanguages/actions';
import * as utils from '../../../utilities/functions';
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
        const form = utils.deepCopy(this.props.form);
        form[type] = text;
        this.props.actions.changeStudentRegistration(form);
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
                    <Text style={formStyles.label}>Avatar</Text>
                   <View>
                        <View>
                            <Text>Basic</Text>
                            <Text>Price: Free</Text>
                            <Text>Access to basic tutorials, primarily beginner tutorials.</Text>
                            <Text>Benefits</Text>
                        </View>
                        
                        <View>
                            <Text>Premium</Text>
                            <Text>Price: 5.00</Text>
                            <Text>Access to all tutorials, can access all tutorials.</Text>
                            <Text>Benefits</Text>
                        </View>
                        
                        <View>
                            <Text>Gold</Text>
                            <Text>Price: 10.00</Text>
                            <Text>Access to all tutorials, can access all tutorials, but also can download tutorials.</Text>
                            <Text>Benefits</Text>
                        </View>
                    </View>
                    <Text>Sign-in via Facebook.</Text>
                    <View>
                        <Text>Facebook</Text>
                        <Text>Twitter</Text>
                        <Text>Linkedin</Text>
                    </View>
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