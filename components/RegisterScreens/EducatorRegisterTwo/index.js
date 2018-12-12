import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import * as Config from '../../../utilities/config';
import * as AjaxCreators from '../../../constants/ajaxCallCreators';
import Header from '../../../inputs/Header';
import Input from '../../../inputs/Input';
import Button from '../../../inputs/Button';
import SelectionPane from '../../../inputs/SelectionPane';
import AutoComplete from '../../../inputs/AutoComplete';
import Input from '../../../inputs/Input';

const programmingLanguagesUrl = Config.server + '/programming_languages'
export default class EducatorRegisterTwo extends Component {
    state = {
        plList: [],
        value: '',
        selectedItem: null
    }

    componentDidMount() {
        AjaxCreators.get(programmingLanguagesUrl)
        .then(res => this.setState({plList: res}))
        .catch(error => console.log("Get Programming Languages Error-----------", error));
    }
    handlePLChange = (value) => {
        const { plList } = this.state;
        const filteredItems = plList.filter(pl => value.length > 1 ? pl.name.includes(value) : value === pl.name.slice(0, 1).toLowerCase())
        this.setState({filteredList: filteredItems})
    }

    _renderItem = (dataItem) => (
        <TouchableOpacity style={{width: 100}} onPress={() => this.setState({value: dataItem})}>
            <Text>{dataItem.name}</Text>
        </TouchableOpacity>
    )
    render() {
        return (
            <ScrollView>
                    <Header title="Pick your Programming Languages of Expertise and Preference" overrideStyle={styles.labelOverride}/>

                    <Text style={formStyles.label}>So as a educator what are programming languages of your expertise?</Text>
                    
                    <Input onChange={() => console.log("PL of expertise Change Input")} type="PL of expetise" 
                    overrideInputStyle={styles.input} placeholder="pl of expertise"/>
                    
                    <Text style={formStyles.label}>So as a educator what are your favorite programming languages?</Text>
                    
                    <AutoComplete data={this.state.filteredList} placeholder="Favorite Programming Languages"
                     valueObj={{}} value={this.state.selectedItem ? this.state.selectedItem.name : this.state.value} onChangeText={(text) => this.setState({value: text})} renderItem={this._renderItem} />
                    
                    <SelectionPane title="Programming Languages of Expertise"  overrideTitleStyles={formStyles.label}>
                        <Text style={styles.label}>No Languages picked.</Text>
                        {/* {this.state.plList.map(pl => <Card type="register-programming-languages" />)} */}
                    </SelectionPane>
                    <SelectionPane title="Favorite Programming Languages" overrideTitleStyles={formStyles.label}>
                        <Text style={styles.label}>No Languages picked.</Text>
                    </SelectionPane>
                    <Button />
            </ScrollView>
        );
    }
}