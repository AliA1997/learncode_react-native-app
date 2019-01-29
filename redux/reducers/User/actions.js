import * as config from '../../../utilities/config';
import * as AjaxActions from '../Ajax/actions';
import * as ActionTypes from '../../actionTypes';

// const baseEducatorUrl = config.server + '/educators';
// const baseStudentUrl = config.server + '/students';

// export const getAllEducators = () => {
//     return dispatch => {
//         dispatch(AjaxActions.beginAjaxCall());
//         return AjaxCallCreators.get(baseEducatorUrl)
//             .then(educators => {
//                 dispatch({
//                     type: ActionTypes.GET_GENERAL_EDUCATORS_SUCCESS,
//                     educators
//                 });
//             })
//             .catch(error => {
//                 dispatch(AjaxActions.ajaxCallEndsInError());
//                 return error;
//             });
//     }
// }

// export const getAllStudents = () => {
//     return dispatch => {
//         dispatch(AjaxActions.beginAjaxCall());
//         return AjaxCallCreators.get(baseStudentUrl)
//             .then(students => {
//                 dispatch({
//                     type: ActionTypes.GET_GENERAL_STUDENTS_SUCCESS,
//                     students
//                 })
//             })
//             .catch(error => {
//                 dispatch(AjaxActions.ajaxCallEndsInError());
//                 return error;
//             });
//     }
// }