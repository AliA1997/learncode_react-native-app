import { StyleSheet } from 'react-native';
import * as configStyles from '../config';

const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: 'green', 
        height: 50,
        width: 50,
        marginBottom: 10,
        borderRadius: 50, 
        borderWidth: 5,
        borderColor: 'black',
        backgroundColor: 'white',
    },
    headerTextColor: {
        fontWeight: 'bold',
        color: configStyles.navTextColor,
        marginBottom: 20,
        fontSize: 26,
        textAlign: 'center',
        flexGrow: 0.8
    }
})

export default styles;