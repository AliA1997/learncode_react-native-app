import React, { PureComponent } from 'react';
import { withNavigation } from 'react-navigation';
import { View, Text } from 'react-native';
import Navbar from '../inputs/Navbar';
import baseStyles from '../styles/base';


class NavbarWithComponent extends PureComponent {
    
    static navigationOptions =({navigation}) => {
        if(this.props.title) 
        return {
            drawerLabel: this.props.title,
            navigation
        }
        else 
        return { navigation }
    }

    static defaultProps = {
        title: '',
        overrideStyles: {}
    }

    render() {
        return (
            <View style={[baseStyles.container, this.props.overrideStyles]}>
                <Navbar toggle={() => this.props.navigation.toggleDrawer()}/>
                {this.props.children}
            </View>
        );
    }
}

export default withNavigation(NavbarWithComponent);

