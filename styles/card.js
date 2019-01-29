import { StyleSheet, Dimensions } from 'react-native';
import * as configStyles from './config';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'red',
        borderWidth: 1,
        borderColor: '#A5A5A4',
        borderStyle: 'solid',
        shadowOffset: {width: 22, height: 22},
        // shadowOpacity: 0.7,
        // shadowColor: '#000000',
        // shadowOffset: {
        //   width: 0,
        //   height: 12
        // },
        // shadowRadius: 5,
        // shadowOpacity: 1,
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        height: height * 0.2,
        width: width * 0.9,
        marginTop: 20,
        marginBottom: 20,
    },
    subContainer: {
        height: '100%',
        justifyContent: 'space-around',
    },  
    keyContainer: {
        alignItems: 'flex-start',
    },
    valueContainer: {
        alignItems: 'flex-start',
    },
    text: {
        color: configStyles.textColor,
        fontSize: configStyles.textSize,
        lineHeight: configStyles.lineHeight,
        fontWeight: '300',
    },
    keyText: {
        fontWeight: 'bold'
    },
    imageContainer: {
        height: 75,
        width: 75,
        alignItems: 'center',
    },
    image: {
        height: 60,
        width: 60,
        flex: 1,
        backgroundColor: 'red',
        borderRadius: 50,
        alignItems: 'center',
        textAlign: 'center'
    },
    listCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 200
    },
    listCardText: {
        width: 125,
        textAlign: 'center',
        fontSize: 20
    }
});

export default styles;