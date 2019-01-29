import gql from 'graphql-tag';

//For getting all students.
export const getAllStudentCards = gql`
    query {
        getAllStudents {
            displayName
            intro
            avatar
            favoriteProgrammingLanguages {
                name
                image
            }
        }
    }
`;


//FOr get a specific student info based on it's id.
export const getStudentBasedOnId = (id) => {
    return gql`
        query {
            getStudent(id: ${id}) {
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
                favoriteProgrammingLanguages {
                    name
                    image
                }
                favoriteTutorials {
                    author {
                        name
                        avatar
                    }
                    title
                    subject
                    link
                }   
            }
        }
    `;
}