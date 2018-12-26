import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AuthActions from '../../../redux/reducers/Auth/actions';
import * as ProgrammingLanguagesActions from '../../../redux/reducers/ProgrammingLanguages/actions';
import ComponentWithNavbar from '../../../utilities/ComponentWithNavbar';
import AutoComplete from '../../../inputs/AutoComplete';
import Button from '../../../inputs/Button';
import Card from '../../../inputs/Card';
import Header from '../../../inputs/Header';
import SelectionPane from '../../../inputs/SelectionPane';
import navStyles from '../../../styles/navigatorStyles/stackNavigatorStyles';
import baseStyles from '../../../styles/base';
import formStyles from '../../../styles/form';
import styles from '../styles';

class EducatorRegisterThree extends Component {
    state = {
        filteredList: [],
        currentFavoritePL: '',
        currentPLOfExpertise: '',
        selectedItem: null
    }

    async componentDidMount() {
        await this.props.actions.getProgrammingLanguages();
        this.setState({filteredList: this.props.programmingLanguages});
        console.log("this.state.filteredList", this.state.filteredList);
    }


    handleChange = (text, type) => {
        const regularExpression = new RegExp(text, 'gi')
        const suggestions = this.props.programmingLanguages.filter(pl => pl.name.match(regularExpression));
        if(type === 'currentProgrammingLanguage')
            this.setState({currentFavoritePL: text});
        else
            this.setState({currentPLOfExpertise: text});
        this.setState({filteredList: suggestions})
    }
    
    handleSelect = (type, item) => {
        const { filteredList } = this.state;
        //Copy your this.props.form
        const form = Object.assign({}, this.props.form);
        //Copy your filteredList array 
        const copyFilteredList = filteredList.slice();
        const itemToAdd = copyFilteredList.find(pl => pl.name === item);
        if(type === 'favoriteProgrammingLanguages') {
            //Copy the array from the form favoriteProgrammingLanguages property, since you would still like to treat the data as immutable.
            const favoriteProgrammingLanguages = form['favoriteProgrammingLanguages'].slice();
            //Push the item you would like to push to the array.
            favoriteProgrammingLanguages.push(itemToAdd);
            //Assign the form favoriteProgrammingLanguages property the copy of the form's favoriteProgrammingLanguages array.
            form['favoriteProgrammingLanguages'] = favoriteProgrammingLanguages;
            //THen assign the form in the initialState to your property.
            this.props.actions.changeEducatorRegistration(form);
        }
        if(type === 'programmingLanguageOfExpertise') {
            const programmingLanguagesOfExpertise = form['languageOfExpertise'].slice();
            programmingLanguagesOfExpertise.push(itemToAdd);
            form['languageOfExpertise'] = programmingLanguagesOfExpertise;
            this.props.actions.changeEducatorRegistration(form);
        }
        return;
    }

    _renderFavPLItem = (item) => (
        <Card objToMap={item} type='register-fav-pl' icon={<Icon name='circle-with-plus' size={30} color='green' />} 
        overrideStyles={{height: 70}} overrideImageStyles={{height: 60}} onPress={this.handleSelect}/>
    )

    _renderPLOfExpertiseItem = (item) => (
        <Card objToMap={item} type='register-pl-of-expertise' icon={<Icon name='circle-with-plus' size={30} color='green' />} 
        overrideStyles={{height: 70}} overrideImageStyles={{height: 60}} onPress={this.handleSelect}/>
    )

    render() {
        return (
            <ComponentWithNavbar  type='stack'  title='(3/4) Coding Info'>

                <KeyboardAwareScrollView>
            
                    <Header title="Pick your Programming Languages of Expertise and Preference" overrideStyle={styles.labelOverride}/>

                    <Text style={[formStyles.label, styles.labelOverride]}>So as a educator what are programming languages of your expertise?</Text>
                    
                    <AutoComplete data={this.state.filteredList.map((item, i) => i < 5 && item)} 
                        placeholder="Programming Languages of Expertise"
                        value={this.state.currentFavoritePL}
                        onChangeText={this.handleChange} renderItem={this._renderPLOfExpertiseItem} />
                        
                    <Text style={[formStyles.label, styles.labelOverride]}>So as a educator what are your favorite programming languages?</Text>
                    
                    <AutoComplete data={this.state.filteredList.map((item, i) => i < 5 && item)}
                        placeholder="Favorite Programming Languages"
                        value={this.state.currentPLOfExpertise}
                        onChangeText={this.handleChange} renderItem={this._renderFavPLItem} />
                    
                    <SelectionPane title="Programming Languages of Expertise"  overrideTitleStyles={baseStyles.selectionPaneHeader}>
                        
                        <Text style={[formStyles.label, styles.labelOverride]}>No Languages picked.</Text>
                        {/* {this.state.plList.map(pl => <Card type="register-programming-languages" />)} */}
                    
                    </SelectionPane>

                    <SelectionPane title="Favorite Programming Languages" overrideTitleStyles={baseStyles.selectionPaneHeader}>
                        
                        <Text style={formStyles.label}>No Languages picked.</Text>
                    
                    </SelectionPane>
                    
                    <Button title="Next - Finish Info" onPress={() => this.props.navigation.navigate("Educator_Register_Three")}/>
    
                </KeyboardAwareScrollView>

            </ComponentWithNavbar>
        );
    }
}

const mapStateToProps = state => ({
    form: state.auth.changeEducatorRegistration,
    programmingLanguages: state.programmingLanguages.list
});

const mapDispatchToProps = dispatch => {
    const combinedActions = Object.assign({}, AuthActions, ProgrammingLanguagesActions);
    return {
        actions: bindActionCreators(combinedActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EducatorRegisterThree);