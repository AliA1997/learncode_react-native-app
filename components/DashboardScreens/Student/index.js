import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TutorialActions from '../../../redux/reducers/Tutorial/actions';
import { ScrollView, View, Dimensions, Text, ActivityIndicator } from 'react-native';
import baseStyles from '../../../styles/base';
//Import your Query component
import {  Query } from 'react-apollo';
import * as tutorialQueries from '../../../schemas/tutorial/getQueries';
import ComponentWithNavbar from '../../../utilities/ComponentWithNavbar';
//import Animated from reanimated similar to react-native Animated component except it is a default export.
import Animated from 'react-native-reanimated';
//import TapGestureHandler to handle simple clicks on animated components.
import { TapGestureHandler, State } from 'react-native-gesture-handler';

import Donut from '../../../inputs/Donut';
import Header from '../../../inputs/Header';
import Card from '../../../inputs/Card';
import styles from '../styles';



const { height, width } = Dimensions.get('window');

//Destruct event and Value from Animated named export from react-native-reanimated.
//The event variable is for when an event is triggered it will create a handler for the animated component.
//THe Value is the currentSTate of the animation, via the handler it will pass the dx, dy or the location of the gesture and assign the current state of the animation.
//import your conditional blocks for declaring an ANimation.
//cond is for condition operations similar to if statement, but in this case it is for determining if an animation should be triggered.
//eq is for checking if the animated values are equal.
const { event, Value, cond, eq } = Animated;


const data = [
    {
        title: "Completed Javascript Fundamentals",
        progress: 90
    },
    {
        title: "Not Completed",
        progress: 10
    }
]

const data2 = [
    {
        title: "Beginners Javascript",
        progress: 70
    },
    {
        title: "Completed Javascript Fundamentals",
        progress: 30
    }
]



class StudentDashboard extends PureComponent {
    state = {
        list: [],
        //Assign the current animated value -1 since it has not been triggered 
        animatedValue: new Value(-1),
        currentNumber: 0
    }
    
    //Create a animated state handler.
    onStateChange = event([{
        nativeEvent: {
            state: this.state.animatedValue
        }
    }])

    //DEfine your opacity of your animation
    //Works similar to a terinary statement, but with arguments.
    //If the state of the animation BEGAN that return a opacity of 0.2 else return 1
    //ONce a user clicks an animation it will change it's opacity to 0.2, then when they release the gesture it will go back to 1.
    opacity = cond(eq(this.state.animatedValue, State.BEGAN), 0.2, 1)

    static navigationOptions = {
        drawerLabel: 'Dashboard'
    }

    // componentDidMount() {
    //     this.props.actions.getAllTutorials();
    // }
    render() {
        const { tutorials } = this.props;
        const currentNumber = 0;
        console.log('tutorials----------', tutorials);
        return (
        <ComponentWithNavbar>
            <ScrollView contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}>
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <TapGestureHandler onHandlerStateChange={this.onStateChange}>
                        <Animated.View style={[{backgroundColor: 'blue', height: 100, width: 100}, { opacity: this.opacity}]} />
                    </TapGestureHandler>
                </View>
                <View style={[styles.container, baseStyles.boxContainer, {marginTop: height * 0.2}]}>
                <Header title="Welcome Ali!" overrideStyle={styles.overrideHeaderStyles}/>
                    <View style={{width: width * 0.4}}>
                        <Text style={{color: 'white'}}>
                        </Text>
                        <Donut data={data} valueBasedOn={'progress'} staticColors={true}/>
                    </View>
                    <Text style={styles.containerLabel}>{data[0].title}</Text>
                    <View style={{width: width * 0.4}}>
                        <Text>{data2[0].progress}%</Text>
                        <Donut data={data2} valueBasedOn={'progress'} staticColors={true}/>
                    </View>
                    <Text style={styles.containerLabel}>{data2[0].title}</Text>
                </View>
                <Query query={tutorialQueries.getAllTutorialCards}>
                    {(response, error) => {
                        console.log('obj------------', response);
                            if(error) {
                                console.log('error-------', JSON.stringify(error));
                                return <Text>Error</Text>;
                            }
                            else if (response.loading) {
                                return <ActivityIndicator style={{flex: 1, height: 100, width: 100, marginLeft: 'auto', marginRight: 'auto',}}/>
                            } else {
                                return (
                                            <ScrollView>
                                            {
                                                response.data.tutorials.map(item => {
                                                    delete item['__typename'];
                                                    return <Card key={item.id} type="tutorial" objToMap={item} icon={<Text />}/>;
                                                })
                                            }
                                            </ScrollView>
                                            );
                                        }
                                    }}
                </Query>
            </ScrollView>
        </ComponentWithNavbar>
        );
    }
}

const mapStateToProps = state => ({
    tutorials: state.tutorial.generalTutorials
});

const mapDispatchToProps = dispatch => {
    const combinedActions = Object.assign({}, TutorialActions);
    return {
        actions: bindActionCreators(combinedActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentDashboard);
