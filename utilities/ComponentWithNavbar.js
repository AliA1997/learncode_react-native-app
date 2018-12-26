import React, { PureComponent } from 'react';
import { withNavigation } from 'react-navigation';
import { KeyboardAvoidingView, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Navbar from '../inputs/Navbar';
import baseStyles from '../styles/base';
import navStyles from '../styles/navigatorStyles/stackNavigatorStyles'


class NavbarWithComponent extends PureComponent {
    
    static navigationOptions = ({navigation}) => {
        if(this.props.title) 
        return {
            drawerLabel: this.props.title,
            navigation
        }
        else 
        return { navigation }
    }

    static defaultProps = {
        title: '<LearnCode />',
        overrideStyles: {},
        type: ''
    }

    toggle = () => {
        const { type } = this.props;
        if(type === 'stack') 
            this.props.navigation.goBack();    
        else if(type === 'register') 
            this.props.navigation.navigate('Pick_A_Type');    
        else 
            return this.props.navigation.toggleDrawer()
        
    }

    render() {
        const { type } = this.props;
        let icon;
        if(type === 'stack' || type === 'register') icon = <Icon name="arrow-left" size={30} style={navStyles.navIcon}/>;
        else icon = <Icon name="list-ul" size={25} style={navStyles.navIcon}/>;
        return (
            <KeyboardAvoidingView style={[baseStyles.container, this.props.overrideStyles]}>
                <Navbar toggle={() => this.toggle()} 
                title={this.props.title} icon={icon}/>
                {this.props.children}
            </KeyboardAvoidingView>
        );
    }
}

export default withNavigation(NavbarWithComponent);

