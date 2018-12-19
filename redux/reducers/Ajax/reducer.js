import * as ActionTypes from '../../actionTypes';
import initialState from '../../initialState';
import * as AjaxActions from './actions';


const reducer = (state=initialState.ajax, action) => {
    if(ActionTypes.BEGIN_AJAX_CALL === action.type)
        return Object.assign({}, state, {
            ajaxCallsInProgress: state.ajaxCallsInProgress + 1
        });
    else if(ActionTypes.AJAX_ERROR === action.type || AjaxActions.actionTypesEndedSuccess(action.type))
        return Object.assign({}, state, {
            ajaxCallsInProgress: state.ajaxCallsInProgress > 0 ? state.ajaxCallsInProgress - 1 : 0
        });
    return state;
}


export default reducer;