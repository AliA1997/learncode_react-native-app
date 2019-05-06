import React from 'react';
//import your createStackNavigator from react-navigation to define routes for your student registration
import { createStackNavigator } from 'react-navigation';
//Import your Component for each screen of your Navigation.
import StudentRegister from '../../components/RegisterScreens/StudentRegister';
import StudentRegisterTwo from '../../components/RegisterScreens/StudentRegisterTwo';

import stackNavigatorStyles from '../../styles/navigatorStyles/stackNavigatorStyles';

const studentRegisterNavigator = createStackNavigator(
    {
        Student_Register_One: {
            screen: StudentRegister,
            navigationOptions: () => ({
                // title: '(1/3) Register as a Student',
                // headerStyle: stackNavigatorStyles.headerStyle,
                // headerTitleStyle: stackNavigatorStyles.headerTextColor,
                // headerBackTitleStyle: stackNavigatorStyles.headerTextColor,
                // headerTintColor: 'white'
                header: null
            })
        },
        Student_Register_Two: {
            screen: StudentRegisterTwo,
            navigationOptions: () => ({
                // title: '(2/3) Fav Programming Languages',
                // headerStyle: stackNavigatorStyles.headerStyle,
                // headerTitleStyle: stackNavigatorStyles.headerTextColor,
                // headerBackTitleStyle: stackNavigatorStyles.headerTextColor,
                // headerTintColor: 'white'
                header: null,
            })
        }
    },
    {
        initialRouteName: 'Student_Register_One',
        headerBackTitleVisible: false,
        headerMode: 'float'
    }
);

//Export your student Navigator as a default export, and since it can be named anything once import, can only have one in each file.
export default studentRegisterNavigator;