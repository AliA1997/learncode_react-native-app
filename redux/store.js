//import your needed functions to create your reducer.
import { createStore, combineReducers, applyMiddleware } from 'redux';
//import thunk for middleware 
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
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

///Define your persistedConfig object, that will be used to define your persistedReducer.
// const persistConfig = {
//     key: 'root',
//     storage 
// }

//Define your persistedReducer using your persistReducer function where your would pass your localStorage instance and key, and reducer.
// const persistedReducer = persistReducer(persistConfig, reducer);

//Define your redux middleware
const reduxMiddleware = applyMiddleware(thunk);

//Define your store.
// const store = createStore(persistedReducer, reduxMiddleware);
const store = createStore(reducer, reduxMiddleware);

//Define your persistedStore using the persistStore function.
// const persistor = persistStore(store);

// export default { store, persistor }
export default store;