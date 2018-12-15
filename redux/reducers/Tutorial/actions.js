import * as config from '../../../utilities/config';
import * as AjaxCallCreators from '../../api/AjaxCallCreators';
import * as ActionTypes from '../../actionTypes';
import * as AjaxActions from '../Ajax/actions';

const baseTutorialUrl = config.server + '/tutorials';

export const changeCreateTutorialForm = form => ({
    type: ActionTypes.CHANGE_CREATE_TUTORIAL_FORM,
    form
});

export const changeUpdateTutorialForm = form => ({
    type: ActionTypes.CHANGE_UPDATE_TUTORIAL_FORM,
    form
});


export const getAllTutorials = () => {
    return dispatch => {
        dispatch(AjaxActions.beginAjaxCall());
        return AjaxCallCreators.get(baseTutorialUrl, 'get-tutorials')
            .then(tutorials => {
                dispatch({
                    type: ActionTypes.GET_GENERAL_TUTORIALS_SUCCESS,
                    tutorials
                });
            })
            .catch(error => {
                dispatch(AjaxActions.ajaxCallEndsInError());
                return error;
            });
    }
}