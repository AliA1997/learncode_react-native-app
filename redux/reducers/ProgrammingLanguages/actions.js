import * as config from '../../../utilities/config';
import * as ActionTypes from '../../actionTypes';
import * as AjaxActions from '../Ajax/actions';

// const baseProgrammingLanguagesUrl = config.server + '/programming_languages';
// export const getProgrammingLanguages = () => {
//     console.log("Hit Server");
//     return dispatch => {
//         dispatch(AjaxActions.beginAjaxCall());
//         return AjaxCallCreators.get(baseProgrammingLanguagesUrl, 'get-programming-languages')
//             .then(programmingLanguages => {
//                 dispatch({
//                     type: ActionTypes.GET_PROGRAMMING_LANGUAGES_SUCCESS, 
//                     programmingLanguages
//                 });
//             })
//             .catch(error => {
//                 dispatch(AjaxActions.ajaxCallEndsInError());
//                 return error;
//             });
//     }
// }