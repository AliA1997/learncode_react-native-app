import { createStackNavigator } from 'react-navigation';
import * as configStyles from '../../styles/config';
import stackNavigatorStyles from '../../styles/navigatorStyles/stackNavigatorStyles';
import EducatorRegister from '../../components/RegisterScreens/EducatorRegister';
import EducatorRegisterTwo from '../../components/RegisterScreens/EducatorRegisterTwo';

const educatorRegisterNavigator = createStackNavigator(
{
    Register_One: {
        screen: EducatorRegister,
        navigationOptions: () => ({
            // title: "(1/3) Register as Educator",
            // headerStyle: stackNavigatorStyles.headerStyle,
            // headerTitleStyle: stackNavigatorStyles.headerTextColor,
            // headerBackTitleStyle: stackNavigatorStyles.headerTextColor,
            // headerTintColor: '#0E8B66',
            header: null
        })
    },
    Educator_Register_Two: {
        screen: EducatorRegisterTwo,
        navigationOptions: () => ({
            // title: "(2/3) Fav Programming Languages",
            // headerStyle: stackNavigatorStyles.headerStyle,
            // headerTitleStyle: stackNavigatorStyles.headerTextColor,
            // headerBackTitleStyle: stackNavigatorStyles.headerTextColor,
            // headerTintColor: '#0E8B66',
            header: null
        })
    }
},
{
    initialRouteName: 'Register_One',
    headerBackTitleVisible: false,
    headerMode: 'float'
});

export default educatorRegisterNavigator;