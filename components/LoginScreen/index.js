import React, { PureComponent } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import ComponentWithNavbar from '../../utilities/ComponentWithNavbar';
import formStyles from '../../styles/form';
import baseStyles from '../../styles/base';
import Button from '../../inputs/Button';
import Input from '../../inputs/Input';
import Header from '../../inputs/Header';

export default class LoginScreen extends PureComponent {
    static navigationOptions = {
        drawerLabel: 'Login'
    }
    render() {
        return (
            <ComponentWithNavbar title="Login">
                <View style={baseStyles.boxContainer}>
                    <Header title="Login" />
                    <Text style={formStyles.label}>
                        Username
                    </Text>
                    <Input onChange={() => console.log("changed")} type="username" placeholder="Username...."/>
                    <Text style={formStyles.label}>
                        Password
                    </Text>
                    <Input onChange={() => console.log("changed")} type="Password" placeholder="Password...."/>
                    <Button title="Login" onPress={() => console.log("Login!")} />
                    <Button
                    title="Register" 
                    onPress={() => this.props.navigation.navigate("Register")}
                />
               </View>
            </ComponentWithNavbar>
        );
    }
}