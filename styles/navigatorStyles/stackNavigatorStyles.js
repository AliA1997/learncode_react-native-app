import { StyleSheet } from 'react-native';
import * as configStyles from '../config';

const styles = StyleSheet.create({
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        paddingBottom: 10,
        backgroundColor: configStyles.navBackgroundColor,
        position: 'absolute',
        top: 0,
        height: 100,
        width: '100%',
        zIndex: 100
    },
    headerStyle: {
        height: 50,
        width: 50,
        marginBottom: 10,
        borderRadius: 50, 
        borderWidth: 5,
        borderColor: configStyles.textColor,
    },
    headerTextColor: {
        fontWeight: 'bold',
        color: configStyles.navTextColor,
        marginBottom: 20,
        fontSize: 26,
        textAlign: 'center',
        flexGrow: 0.8
    },
    navIcon: {
        textAlign: 'center',
        paddingTop: 5
    }
})

export default styles;