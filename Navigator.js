import { createDrawerNavigator, createStackNavigator } from 'react-navigation';
//import components
import * as configStyles from './styles/config';
import stackNavigatorStyles from './styles/navigatorStyles/stackNavigatorStyles';
import PickATypeRegister from './components/RegisterScreens/PickATypeRegister';
//import your Educator Register Screen via a StackNavigator
import EducatorRegisterNavigator from './navigators/EducatorRegister';
import StudentRegisterNavigator from './navigators/StudentRegister';
import StudentDashboard from './components/DashboardScreens/Student';
import LoginScreen from './components/LoginScreen';

const RegisterNavigator = createStackNavigator(
    {
        Pick_A_Type: {
            screen: PickATypeRegister,
            navigationOptions: () => ({
                header:null
            })
        },
        Register_Educator: {
            screen: EducatorRegisterNavigator,
            navigationOptions: () => ({
                header: null
            })
        },
        Register_Student: {
            screen: StudentRegisterNavigator,
            navigationOptions: () => ({
                header: null
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