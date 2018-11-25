import { StyleSheet } from 'react-native';
import * as configStyles from '../config';

const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: 'green', 
        height: 50
    },
    headerTextColor: {
        color: configStyles.navTextColor
    }
})

export default styles;