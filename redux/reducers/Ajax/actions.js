import * as ActionTypes from '../../actionTypes';
import initialState from '../../initialState';

export const actionTypesEndedSuccess = (type) => {
    //Return true if the type ends in SUCCESS 
    return type.substring(type.length - 7) === 'SUCCESS';
}

export const beginAjaxCall = () => ({
    type: ActionTypes.BEGIN_AJAX_CALL
})

export const ajaxCallEndsInError = () => ({
    type: ActionTypes.AJAX_ERROR
})