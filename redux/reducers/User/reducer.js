import * as ActionTypes from '../../actionTypes';
import initialState from '../../initialState';

const reducer = (state=initialState.user, action) => {
    switch(action.type) {
        case ActionTypes.GET_GENERAL_EDUCATORS_SUCCESS:
            return Object.assign({}, state, {
                generalEducators: action.educators
            });
        case ActionTypes.GET_GENERAL_STUDENTS_SUCCESS:
            return Object.assign({}, state, {
                generalStudents: action.students
            });
        default:
            return state;
    }
}

export default reducer;