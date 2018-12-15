//import your needed functions to create your reducer.
import { createStore, combineReducers, applyMiddleware } from 'redux';
//import thunk for middleware 
import thunk from 'redux-thunk';
//import your reducers.
import authReducer from './reducers/Auth/reducer';
import ajaxReducer from './reducers/Ajax/reducer';
import criticismReducer from './reducers/Criticism/reducer';
import programmingLanguagesReducer from './reducers/ProgrammingLanguages/reducer';
import tutorialReducer from './reducers/Tutorial/reducer';


const reducer = combineReducers({
    auth: authReducer,
    ajax: ajaxReducer,
    criticism: criticismReducer,
    programmingLanguages: programmingLanguagesReducer,
    tutorial: tutorialReducer
});

const reduxMiddleware = applyMiddleware(thunk);

const store = createStore(reducer, reduxMiddleware);

export default store;
