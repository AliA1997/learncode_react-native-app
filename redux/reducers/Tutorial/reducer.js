import * as ActionTypes from '../../actionTypes';
import initialState from '../../initialState';

const reducer = (state=initialState.tutorial, action) => {
    switch(action.type) {
        case ActionTypes.CHANGE_CREATE_TUTORIAL_FORM:
            return Object.assign({}, state, {
                createTutorialForm: action.form
            });
        case ActionTypes.CHANGE_UPDATE_TUTORIAL_FORM:
            return Object.assign({}, state, {
                updateTutorialForm: action.form
            });
        case ActionTypes.GET_GENERAL_TUTORIALS_SUCCESS:
            return Object.assign({}, state, {
                generalTutorials: action.tutorials
            });
        default:
            return state;
    }
}

export default reducer;