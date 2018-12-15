import * as ActionTypes from '../../actionTypes';

export const changeCreateTutorialCriticismForm = form => ({
    type: ActionTypes.CHANGE_CREATE_TUTORIAL_CRITICISM_FORM,
    form
});

export const changeCreateEducatorCriticismForm = form => ({
    type: ActionTypes.CHANGE_CREATE_EDUCATOR_CRITICISM_FORM,
    form
});

export const changeUpdateTutorialCriticismForm = form => ({
    type: ActionTypes.CHANGE_UPDATE_TUTORIAL_CRITICISM_FORM,
    form
});

export const changeUpdateEducatorCriticismForm = form => ({
    type: ActionTypes.CHANGE_UPDATE_EDUCATOR_CRITICISM_FORM,
    form
});