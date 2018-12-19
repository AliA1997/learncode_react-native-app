import * as ActionTypes from '../../actionTypes';
import initialState from '../../initialState';

const reducer = (state=initialState.programmingLanguages, action) => {
    switch(action.type) {
        case ActionTypes.GET_PROGRAMMING_LANGUAGES_SUCCESS:
            return Object.assign(state, {}, {
                list: action.programmingLanguages
            });
        default:
            return state;
    }
}

export default reducer;