import { StyleSheet, Dimensions } from 'react-native';
import * as ConfigStyles from '../../styles/config';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    header: {
        fontFamily: 'Avenir-Light',
        marginRight: 'auto',
        marginLeft: 'auto',
        justifyContent: 'space-between',
        fontSize: ConfigStyles.headerTextSize,
        fontWeight: ConfigStyles.headerTextWeight,
        color: 'black'
    }, 
    button: {
        backgroundColor: 'transparent',
        color: ConfigStyles.textColor,
        borderWidth: 2,
        borderRadius: 40,
        width: width - 50
    },
    buttonText: {
        fontFamily: 'Avenir-Light',
        fontWeight: ConfigStyles.headerTextWeight,
        fontSize: 18,
        color: 'black'
    },
    input: {
        borderColor: 'black'
    },
    scrollContainer: {
        flex: 1,
        minHeight: height,
        marginTop: height * 0.025,
        justifyContent: 'center',
        alignItems: 'center'
    },
    labelOverride: {
        lineHeight: height * 0.05,
        marginBottom: height * 0.01
    },
});

export default styles;