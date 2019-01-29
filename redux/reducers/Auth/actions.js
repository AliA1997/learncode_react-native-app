//import your AjaxCallCreators, and config for calling to your .NET database.
import * as config from '../../../utilities/config';
import * as ActionTypes from '../../actionTypes';
//import AjaxActions indicating your are starting a ajaxCall.
// import * as AjaxActions from '../Ajax/actions';

//Define base url for calls to the backend.
const baseLoginUrl = config.server + '/users/login';

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


///////////////////////////////////
//////Actions for Logging In///////
///////////////////////////////////
// export const login = (form) => {
//     return dispatch => {
//         dispatch(AjaxActions.beginAjaxCall());
//         return AjaxCallCreators.post(baseLoginUrl, form, 'user', 'application/json')
//             .then(user => {
//                 console.log('user------------------', user);
//             })
//             .catch(error => {
//                 console.log("Error----------------", error);
//                 dispatch(AjaxActions.ajaxCallEndsInError());
//                 return error;
//             })
//     }
// }