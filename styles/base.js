import { StyleSheet, Dimensions, Platform } from 'react-native';
import * as configStyles from './config';
var {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: configStyles.appBackgroundColor,
        width: width
    },
    topContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: configStyles.appBackgroundColor,
        width: width
    },
    boxContainer: {
        marginTop: -(height * 0.025),
        height: height * 0.6,
        width: width * 0.9,
        borderColor: configStyles.textColor,
        borderRadius: 30,
        borderWidth: 2,
        padding: 10,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    paneContainer: {
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'transparent',
        shadowColor: 'white',
        shadowOpacity: 0.25,
        padding: 0,
        minHeight: 75,
    },
    pane: {
        borderWidth: 1.25,
        borderColor: configStyles.borderColor,
        alignItems: 'center',
        minHeight: 50,
        width: width * 0.8,
    },
    selectionPaneHeader: {
        fontSize: 20,
        lineHeight: height * 0.06
    },
    autocomplete: Platform.select({
        android: {},
        ios: {
            width: width * 0.8
        }
    }),
    autocompleteList: {
        width: width * 0.6
    },
    searchBarIconContainer: {
        width: width * 0.2,
        backgroundColor: configStyles.buttonColor
    }
});

export default styles;