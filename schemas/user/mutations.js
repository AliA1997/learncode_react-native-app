import gql from 'graphql-tag';


export const loginEducatorMutation = gql`
                            mutation LoginEducator($displayName: String, $password: String) {
                                loginEducator(displayName: $displayName, password: $password) {
                                    id
                                    displayName
                                    jwtToken
                                }
                            }`;

export const loginStudent = gql`
                            mutation LoginStudent($displayName: String, $password: String) {
                                loginStudent(displayName: $displayName, password: $password) {
                                    id
                                    displayName
                                    jwtToken
                                }
                            }`;

export const register = (thirdParty) => {
    if(thirdParty)
        return gql`
        mutation Register($displayName: String, $email: String, $avatar: String, $role: String) {
            register(thirdParty: true, displayName: ${form.displayName}, email: ${form.email}, avatar: ${form.avatar}, role: ${form.role}) {
                id
                displayName
                email
            }
        }
        `
    else 
        return gql`
        mutation Register($displayName: String, $email: String, $avatar: String, $role: String, $experience: Number, $eduInstitution: String, $eduYearOfGraduation: Number, $eduCertificate: String, 
                        $programmingExperience: String, $password: String) {
            register(thirdParty: false, displayName: $displayName, email: $email, avatar: $avatar, role: $role, experience: $programmingExperience, 
                eduInstitution: $eduInstitution, eduYearOfGraduation: $eduYearOfGraduation, eduCertificate: $eduCertificate, password: $password) {
                id
                displayName
                email
            }
        }
        `
}

