import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AuthActions from '../../../redux/reducers/Auth/actions';
import Button from '../../../inputs/Button';
import baseStyles from '../../../styles/base';
import formStyles from '../../../styles/form';
import ComponentWithNavbar from '../../../utilities/ComponentWithNavbar';
import styles from '../styles';

class PickATypeRegister extends PureComponent {
    static navigationOptions = {
        drawerLabel: 'Pick a type'
    }

    typedPicked = (type) => {
        let form = Object.assign({}, this.props.form);
        form['type'] = type;
        this.props.actions.changeEducatorRegistration(form);
        console.log('form--------------', this.props.form);
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
                    onPress={() => this.typedPicked('Student')}
                />
                <Button
                    title="Educator"
                    type="Register"
                    overrideStyles={styles.button}
                    overrideTextStyles={styles.buttonText}
                    onPress={() => this.typedPicked('Educator')}
                />
            </ComponentWithNavbar>
        );
    }
}

const mapStateToProps = state => ({
    form: state.auth.educatorRegistrationForm
})

const mapDispatchToProps = dispatch => {
    const combinedActions = Object.assign({}, AuthActions);
    return {
        actions: bindActionCreators(combinedActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PickATypeRegister);