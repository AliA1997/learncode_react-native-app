import * as config from '../../../utilities/config';
import * as AjaxCallCreators from '../../api/AjaxCallCreators';
import * as ActionTypes from '../../actionTypes';
import * as AjaxActions from '../Ajax/actions';

const baseProgrammingLanguagesUrl = config.server + '/programming_languages';
export const getProgrammingLanguages = () => {
    return dispatch => {
        dispatch(AjaxActions.beginAjaxCall());
        return AjaxCallCreators.get(baseProgrammingLanguagesUrl, 'get-programming-languages')
            .then(programmingLanguages => {
                dispatch({
                    type: ActionTypes.GET_PROGRAMMING_LANGUAGES_SUCCESS, 
                    programmingLanguages
                });
            })
            .catch(error => {
                dispatch(AjaxActions.ajaxCallEndsInError());
                return error;
            });
    }
}