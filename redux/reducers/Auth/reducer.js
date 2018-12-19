import * as ActionTypes from '../../actionTypes';
import initialState from '../../initialState';

const reducer = (state = initialState.auth, action) => {
    switch(action.type) {
        case ActionTypes.CHANGE_LOGIN_FORM:
            return Object.assign({}, state, {
                loginForm: action.form
            });
        case ActionTypes.CHANGE_STUDENT_REGISTRATION_FORM:
            return Object.assign({}, state, {
                studentRegistrationForm: action.form
            });
        case ActionTypes.CHANGE_EDUCATOR_REGISTRATION_FORM:
            return Object.assign({}, state, {
                educatorRegistrationForm: action.form
            });
        default: 
            return state;
    }
}

export default reducer;