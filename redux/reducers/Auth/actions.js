//import your AjaxCallCreators, and config for calling to your .NET database.
import * as config from '../../../utilities/config';
import * as ActionTypes from '../../actionTypes';
import * as mutations from '../../../schemas/user/mutations';
import { graphql } from 'react-apollo';

//import AjaxActions indicating your are starting a ajaxCall.
import * as AjaxActions from '../Ajax/actions';

//////////////////////////////////
///Actions for changing inputs////
//////////////////////////////////
export const changeLoginForm  = form => ({
    type: ActionTypes.CHANGE_LOGIN_FORM,
    form
});

export const changeStudentRegistration = form => ({
    type: ActionTypes.CHANGE_STUDENT_REGISTRATION_FORM,
    form
});

export const changeEducatorRegistration = form => ({
    type: ActionTypes.CHANGE_EDUCATOR_REGISTRATION_FORM,
    form
});


///////////////////////////////////
//////Actions for Logging In///////
///////////////////////////////////
export const login = (form, type, client) => {
    let user;
    console.log('form----------', form);
    console.log('type-------------', type);
    console.log('client----------', client);
    return async dispatch => {
        dispatch(AjaxActions.beginAjaxCall());

        if(type == 'student') 
            user = await client.mutate({mutation: mutations.loginStudent}, {variables: form})
            
        else 
            user = await client.mutate({mutation: mutations.loginEducator}, {variables: form})

            console.log('user---------------------', user);

            dispatch({
                type: ActionTypes.PERSIST_LOGIN,
                user
            });
            
            dispatch({
                type: ActionTypes.LOGIN_SUCCESS
            });

            return;
    }
}

export const register = (form, isThirdParty, client) => {

    return dispatch => {
        dispatch(AjaxActions.beginAjaxCall());

        const user = client.mutate(mutations.register(isThirdParty), {variables: form});

        dispatch({
            type: PERSIST_LOGIN,
            user
        });

        dispatch({
            type: LOGIN_SUCCESS
        });

        return;
    }

}
