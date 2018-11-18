import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import Button from '../../../inputs/Button';
import baseStyles from '../../../styles/base';
import formStyles from '../../../styles/form';
import ComponentWithNavbar from '../../../utilities/ComponentWithNavbar';
import styles from '../styles';

export default class PickATypeRegister extends PureComponent {
    static navigationOptions = {
        drawerLabel: 'Pick a type'
    }
    typedPicked = (type) => {
        return this.props.navigation.navigate(`Register_${type[0].toUpperCase() + type.slice(1)}`)
    }
    render() {
        return (
            <ComponentWithNavbar overrideStyles={baseStyles.topContainer} title={"Pick a Type"}>
                <Text style={styles.header}>Type of Account?</Text>
                <Button 
                    title="Student" 
                    type="Register"
                    overrideStyles={styles.button}
                    overrideTextStyles={styles.buttonText}
                    onPress={() => this.typedPicked('student')}
                />
                <Button
                    title="Educator"
                    type="Register"
                    overrideStyles={styles.button}
                    overrideTextStyles={styles.buttonText}
                    onPress={() => this.typedPicked('educator')}
                />
            </ComponentWithNavbar>
        );
    }
}