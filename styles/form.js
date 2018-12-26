import { StyleSheet, Dimensions } from 'react-native';
import * as configStyles from './config';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    loginButton: {
        backgroundColor: configStyles.buttonColor,
        height: 50,
        width: 200,
        margin: 10,
        borderRadius: 50,
        marginRight: 'auto', 
        marginLeft: 'auto',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginButtonTextColor: {
        color: configStyles.buttonTextColor,
        fontSize: configStyles.buttonTextSize,
        lineHeight: configStyles.lineHeight
    },
    label: {
        paddingTop: 5,
        textAlign: 'left',
        width: width * 0.8,
        color: configStyles.textColor,
        fontSize: configStyles.textSize,
        lineHeight: configStyles.textHeight
    },
    registerImage: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 30,
        width: 30,
    },
    inputContainer: {
        width: width * 0.9,
        height: height * 0.08,
        marginTop: 15,
        marginBottom: 15,
        justifyContent: 'center',
        // alignItems: 'center'
    },
    input: {
        width: width * 0.8,
        height: height * 0.05,
        borderWidth: 1,
        borderColor: configStyles.inputColor,
        borderRadius: configStyles.inputBorderRadius,
        color: configStyles.inputColor,
        fontSize: configStyles.inputFontSize,
        paddingLeft: 15,
        flex: 1,
    },
    header: {
        fontSize: configStyles.headerTextSize,
        paddingTop: 10,
        flexGrow: 0.5
    },
    autocomplete: {
        width: width * 0.8,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    autocompleteList: {
        marginTop: -10,
        width: width * 0.9,
        height: height * 0.25,
        backgroundColor: 'transparent',
        paddingLeft: 15
    },
    autocompleteListItem: {
        backgroundColor: 'transparent',
    }
});

export default styles;