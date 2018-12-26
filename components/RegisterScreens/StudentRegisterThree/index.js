import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AuthActions from '../../../redux/reducers/Auth/actions';
import * as ProgrammingLanguagesActions from '../../../redux/reducers/ProgrammingLanguages/actions';
import AutoComplete from '../../../inputs/AutoComplete';
import Card from '../../../inputs/Card';
import SelectionPane from '../../../inputs/SelectionPane';
import ComponentWithNavbar from  '../../../utilities/ComponentWithNavbar';
import formStyles from '../../../styles/form';
import styles from '../styles';

class StudentRegisterThree extends PureComponent {
    state = {
        currentProgrammingLanguage: '',
        filteredList: []
    }

    async componentDidMount() {
        await this.props.actions.getProgrammingLanguages();
        this.setState({filteredList: this.props.programmingLanguages});
        alert("Data Recieved!");
    }

    handleChange = (text) => {
        const regularExpression = new RegExp(text, 'gi')
        const { filteredList } = this.state;
        console.log('filteredList------------------', filteredList);
        // const copyFilteredList = filteredList.slice();
        // const newFilteredList = copyFilteredList.filter(item => item.name.match(regularExpression));
        return this.setState({currentProgrammingLanguage: text});
    }

    handleSelect = (type, item) => {
        if(type === 'favoriteProgammingLanguages') {
            const { filteredList } = this.state;
            //COpy of the object via the this.props.form.
            const form = Object.assign({}, this.props.form);
            //Filter the filteredList state.
            const itemToAdd = filteredList.find(pl => pl.name === item);
            //Copy the array from the form current favoriteProgrammingLanguages array.
            const copyOfFavProgrammingLanguages = form['favoriteProgammingLanguages'].slice();
            //Push it to the copy of the array.
            copyOfFavProgrammingLanguages.push(itemToAdd);
            //Assign the favoriteProgramming array of the form to the copy of the new array.
            form['favoriteProgammingLanguages'] = copyOfFavProgrammingLanguages;
            //Dispatch a action to change the form.
            this.props.actions.changeEducatorRegistration(form);
        }
        //Then return out of the function
        return;
    }

    _renderPLItem = (item) => (
        <Card objToMap={item} type='register-fav-pl' icon={<Icon name='circle-with-plus' size={30} color='green' />} 
        overrideStyles={{height: 70}} overrideImageStyles={{height: 60}} onPress={this.handleSelect}/>
    )

    render() {
        const { currentProgrammingLanguage, filteredList } = this.state;

        return (
            <ComponentWithNavbar type='stack' title="(3/4) Coding Info">
                <View  style={{marginTop: 200}}>
                    <Text>Student Register Three</Text>
                    
                    <Text style={formStyles.label}>So as a student what programming languages you would prefer? </Text>
                        
                    <AutoComplete data={filteredList} value={currentProgrammingLanguage} 
                        onChangeText={text => this.handleChange(text)} placeholder="Chosse Favorite Programming Languages!"
                        overrideStyles={{height: 60}} overrideImageStyles={{height: 50}}
                        renderItem={this._renderPLItem}/>

                    <SelectionPane title="Favorite Programming Languages">
                        <Text style={styles.label}>No Languages picked.</Text>
                    </SelectionPane>
                </View>           
            </ComponentWithNavbar>
        );
    }
}

const mapStateToProps = state => ({
    programmingLanguages: state.programmingLanguages.list,
    form: state.auth.studentRegistrationForm
});

const mapDispatchToProps = dispatch => {
    const combinedActions = Object.assign({}, AuthActions, ProgrammingLanguagesActions);
    return {
        actions: bindActionCreators(combinedActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentRegisterThree);