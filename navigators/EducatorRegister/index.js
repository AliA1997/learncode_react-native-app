import { createStackNavigator } from 'react-navigation';
import * as configStyles from '../../styles/config';
import stackNavigatorStyles from '../../styles/navigatorStyles/stackNavigatorStyles';
import EducatorRegister from '../../components/RegisterScreens/EducatorRegister';
import EducatorRegisterTwo from '../../components/RegisterScreens/EducatorRegisterTwo';
import EducatorRegisterThree from '../../components/RegisterScreens/EducatorRegisterThree';

const educatorRegisterNavigator = createStackNavigator(
{
    Register_One: {
        screen: EducatorRegister,
        navigationOptions: () => ({
            title: "Register as Educator",
            headerStyle: stackNavigatorStyles.headerStyle,
            headerTitleStyle: stackNavigatorStyles.headerTextColor,
            headerBackTitleStyle: stackNavigatorStyles.headerTextColor,
            headerTintColor: 'white',
        })
    },
    Register_Two: {
        screen: EducatorRegisterTwo,
        navigationOptions: () => ({
            title: "Fav Programming Languages",
            headerStyle: stackNavigatorStyles.headerStyle,
            headerTitleStyle: stackNavigatorStyles.headerTextColor,
            headerBackTitleStyle: stackNavigatorStyles.headerTextColor,
            headerTintColor: 'white',
        })
    },
    Register_Three: {
        screen: EducatorRegisterThree,
        navigationOptions: () => ({
            title: "Not defined",
            headerStyle: stackNavigatorStyles.headerStyle,
            headerTitleStyle: stackNavigatorStyles.headerTextColor,
            headerBackTitleStyle: stackNavigatorStyles.headerTextColor,
            headerTintColor: 'white',
        })
    }
},
{
    initialRouteName: 'Register_One',
    headerBackTitleVisible: true,
    headerMode: 'float'
});

export default educatorRegisterNavigator;