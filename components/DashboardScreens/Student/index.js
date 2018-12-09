import React, { PureComponent } from 'react';
import { ScrollView, View, Dimensions, Text } from 'react-native';
import * as Config from '../../../utilities/config';
import baseStyles from '../../../styles/base';
import * as AjaxCreators from '../../../constants/ajaxCallCreators';
import ComponentWithNavbar from '../../../utilities/ComponentWithNavbar';
import Donut from '../../../inputs/Donut';
import Header from '../../../inputs/Header';
import styles from '../styles';


const { height, width } = Dimensions.get('window');

const data = [
    {
        title: "Completed Javascript Fundamentals",
        progress: 50
    },
    {
        title: "Beginners Javascript",
        progress: 50
    }
]

const data2 = [
    {
        title: "Beginners Javascript",
        progress: 50
    },
    {
        title: "Completed Javascript Fundamentals",
        progress: 50
    }
]

const apiUrl = Config.server + '/tutorials';

export default class StudentDashboard extends PureComponent {
    state = {
        list: []
    }
    static navigationOptions = {
        drawerLabel: 'Dashboard'
    }

    componentDidMount() {
        AjaxCreators.get(apiUrl, 'tutorials', 'gettutorial')
        .then(res => console.log('res-----------', res))
        .catch(error => console.log("Get Tutorials Error----------", error));
    }
    render() {
        return (
            <ComponentWithNavbar>
                <ScrollView contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}>
                    <View style={[styles.container, baseStyles.boxContainer, {marginTop: height * 0.2}]}>
                    <Header title="Welcome Ali!" overrideStyle={styles.overrideHeaderStyles}/>
                        <View style={{width: width * 0.4}}>
                            <Text>{data2[0].progress}%</Text>
                            <Donut data={data} valueBasedOn={'progress'} staticColors={true}/>
                        </View>
                        <Text style={styles.containerLabel}>{data[0].title}</Text>
                        <View style={{width: width * 0.4}}>
                            <Text>{data2[0].progress}%</Text>
                            <Donut data={data2} valueBasedOn={'progress'} staticColors={true}/>
                        </View>
                        <Text style={styles.containerLabel}>{data2[0].title}</Text>
                    </View>
                    <View>

                    </View>
                </ScrollView>
            </ComponentWithNavbar>
        );
    }
}