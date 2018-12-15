import * as ActionTypes from '../../actionTypes';

//////////////////////////////////
///Actions for changing inputs////
//////////////////////////////////
export const changeLoginForm  = form => ({
    type: ActionTypes.CHANGE_LOGIN_FORM,
    form
});

export const changeStudentRegistration = form => ({
    type: ActionTypes.CHANGE_STUDENT_REGISTRATION_FORM,
    form
});

export const changeEducatorRegistration = form => ({
    type: ActionTypes.CHANGE_EDUCATOR_REGISTRATION_FORM,
    form
});