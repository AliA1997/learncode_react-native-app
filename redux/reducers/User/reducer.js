import * as ActionTypes from '../../actionTypes';
import initialState from '../../initialState';

const reducer = (state=initialState.user, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default reducer;