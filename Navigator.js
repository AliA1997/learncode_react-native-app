import { createDrawerNavigator, createStackNavigator } from 'react-navigation';
//import components
import * as configStyles from './styles/config';
import stackNavigatorStyles from './styles/navigatorStyles/stackNavigatorStyles';
import PickATypeRegister from './components/RegisterScreens/PickATypeRegister';
//import your Educator Register Screen via a StackNavigator
import EducatorRegisterNavigator from './navigators/EducatorRegister';
import StudentRegister from './components/RegisterScreens/StudentRegister';
import StudentDashboard from './components/DashboardScreens/Student';
import LoginScreen from './components/LoginScreen';
import EducatorRegister from './components/RegisterScreens/StudentRegister';

const RegisterNavigator = createStackNavigator(
    {
        Pick_A_Type: {
            screen: PickATypeRegister,
            navigationOptions: () => ({
                title: 'Pick a type',
                header:null
            })
        },
        Register_Educator: {
            screen: EducatorRegisterNavigator,
            navigationOptions: () => ({
                title: "Register as Educator",
                headerStyle: stackNavigatorStyles.headerStyle,
                headerTitleStyle: stackNavigatorStyles.headerTextColor,
                headerBackTitleStyle: stackNavigatorStyles.headerTextColor,
                headerTintColor: 'white',
            })
        },
        Register_Student: {
            screen: StudentRegister,
            navigationOptions: () => ({
                title: "Register as Student",
                headerStyle: stackNavigatorStyles.headerStyle,
                headerTitleStyle: stackNavigatorStyles.headerTextColor,
                headerBackTitleStyle: stackNavigatorStyles.headerTextColor,
                headerTintColor: 'white'
            })
        }
    },
    {
        initialRouteName: 'Pick_A_Type',
        headerBackTitleVisible: true,
        headerMode: 'float'
    }
);

const Navigator = createDrawerNavigator(
    {
        Login: LoginScreen,
        Register: RegisterNavigator,
        Dashboard: StudentDashboard
    },
    {
        initialRouteName: "Dashboard",
        drawerBackgroundColor: configStyles.navBackgroundColor,
        drawerWidth: 150,
        drawerPosition: 100
    }
);

export default Navigator;