import React, { PureComponent } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import ComponentWithNavbar from '../../utilities/ComponentWithNavbar';
import SearchBar from '../../utilities/SearchBar';
import Card from '../../inputs/Card';


const searchAllTutorialsQuery = gql`
    query {
        getAllTutorials {
            title 
            subject
            skillLevel
            averageRating
                image
        }
    }
 `;

const searchAllEducatorsQuery = gql`
    query {
        getAllEducators {
        id
        displayName 
        intro
        avatar 
        languagesOfExpertise {
            name
            image
        }
        }
    }
`;

const searchAllStudentsQuery = gql`
`;

const iconTexts = ['tutorial', 'student', 'educator']

export default class Search extends PureComponent {
    
    render() {
        return (
            <ComponentWithNavbar>
                <View>
                    <SearchBar iconTexts={iconTexts}/> 
                </View>

            </ComponentWithNavbar>
        );
    }
}