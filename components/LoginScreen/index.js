import React, { PureComponent } from 'react';
import { View, TouchableOpacity, Text, TouchableWithoutFeedback } from 'react-native';
import * as mutations from '../../schemas/user/mutations';
import { Mutation } from 'react-apollo';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AuthActions from '../../redux/reducers/Auth/actions';
import ComponentWithNavbar from '../../utilities/ComponentWithNavbar';
import * as utils from '../../utilities/functions';
import formStyles from '../../styles/form';
import baseStyles from '../../styles/base';
import Button from '../../inputs/Button';
import Input from '../../inputs/Input';
import Header from '../../inputs/Header';
import gql from 'graphql-tag';


class LoginScreen extends PureComponent {
    
    static navigationOptions = {
        drawerLabel: 'Login'
    }
    
    handleChange = (text, type) => {
        const form = utils.deepCopy(this.props.form);

        form[type] = text;

        return;
        // this.props.actions.actionrrs.change
    }

    login = async (loginMutation) => {
        await loginMutation({variables: {displayName: 'AliA1997', password: 'password-1'}})
        alert('login successfully!');
    }

    render() {
        console.log("Auth------------", this.props.actions);
        return (
            <ComponentWithNavbar title="Login">
                <View style={baseStyles.boxContainer}>
                    <Text style={formStyles.label}>
                        Username
                    </Text>
                    <Input onChange={() => console.log("changed")} type="username" placeholder="Username...."/>
                    <Text style={formStyles.label}>
                        Password
                    </Text>
                    <Input onChange={() => console.log("changed")} type="Password" placeholder="Password...."/>
                    <Mutation 
                        mutation={mutations.loginEducatorMutation}
                    >
                        {(loginMutation) => {
                            if(loginMutation.error) 
                                console.log('ERror---------', loginMutation);

                            console.log('loginMutation-------------', loginMutation);
                            if(loginMutation)
                                return <Button title="Login" onPress={async () => {
                                    const user = await loginMutation({variables: {displayName: 'AliA1997', password: 'password-1'}})
                                    console.log("user registered--------------", user);
                                    alert(`user registered!`);
                                }} />

                           }}
                    </Mutation>
                    <Button
                        title="Register" 
                        onPress={() => this.props.navigation.navigate("Register")}
                    />
               </View>
            </ComponentWithNavbar>
        );
    }
}

const mapStateToProps = state => ({
    form: state.auth.loginForm,
    user: state.auth.currentUser
});

const mapDispatchToProps = dispatch => {
    const combinedActions = utils.deepCopy(AuthActions);
    return {
        actions: bindActionCreators(combinedActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
