import gql from 'graphql-tag';

export const getAllEducatorCards = gql`    
    query {
        getAllEducators {
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



export const getEducatorBasedOnId = (id) => {
    return gql`
        query {
            getEducator(id: ${id}) {
                name
                displayName
                avatar
                intro
                email
                occupation
                education {
                    institution
                    certificate
                    yearofgraduation
                }
                programmingExperience
                languagesOfExpertise {
                  name
                  image
                }
                favoriteProgrammingLanguages {
                    name
                    image
                } 
            }            
        }
    `;
}