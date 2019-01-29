import React, { PureComponent } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AuthActions from '../../redux/reducers/Auth/actions';
import ComponentWithNavbar from '../../utilities/ComponentWithNavbar';
import formStyles from '../../styles/form';
import baseStyles from '../../styles/base';
import Button from '../../inputs/Button';
import Input from '../../inputs/Input';
import Header from '../../inputs/Header';

class LoginScreen extends PureComponent {
    static navigationOptions = {
        drawerLabel: 'Login'
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
                    <Button title="Login" onPress={() => this.props.actions.login({email: 'devmtnali@gmail.com', password: 'P@ssw0rd1'})} />
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
    user: state.auth.loginForm
});

const mapDispatchToProps = dispatch => {
    const combinedActions = Object.assign({}, AuthActions);
    return {
        actions: bindActionCreators(combinedActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
