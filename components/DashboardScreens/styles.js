import { StyleSheet, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between', 
        alignItems: 'center',
        flexWrap: 'wrap',
        width: width * 0.8,
    },
    containerLabel: {
        width: width * 0.4,
        fontSize: 20
    },
    overrideHeaderStyles: {
        paddingBottom: 50
    }
})

export default styles