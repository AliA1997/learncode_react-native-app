import gql from 'graphql-tag';

export const getAllTutorialCards = gql`
    query  {
        tutorials:getAllTutorials {
            id
            title 
            subject
            image
            skillLevel
            averageRating
        }
    }
`;



export const getTutorialBasedOnId = (id) => {
    return gql`
    query {
        getTutorial(id: ${id}){
            title
            image
            subject
            skillLevel
            averageRating
            tags {
                title
            }
            author{
                name
                avatar
            }
            criticisms {
                body
                rating
            }
            dateCreated
            dateUpdated
        }
    }
    `;
}