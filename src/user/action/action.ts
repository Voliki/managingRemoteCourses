import { ListenerType } from '../../store/urFaceState';

export const changeField = (field: string, value: any) => (dispatch: any) => {
  dispatch(changeFieldAction(field, value));
};

export const switchingBetweenForms = (typeForm: string) => (dispatch: any) => {
  dispatch(switchingBetweenFormsAction(typeForm));
};

export const changeOpenAndCloseFormListener = (isShow: boolean) => (dispatch: any) => {
  dispatch(changeOpenAndCloseFormListenerAction(isShow));
};

export const addNewListener = () => (dispatch: any) => {
  dispatch(addNewListenerAction());
};

export const changeFieldUr = (field: string, value: any) => (dispatch: any) => {
  dispatch(changeFieldUrAction(field, value));
};

export const saveListener = () => (dispatch: any) => {
  dispatch(saveListenerAction());
};

export const deleteListener = (listenerId: string) => (dispatch: any) => {
  dispatch(deleteListenerAction(listenerId));
};

export const editProfileListener = (listenerId: string) => (dispatch: any) => {
  dispatch(editProfileListenerAction(listenerId));
};

export const changeFieldUrListener = (field: string, value: any) => (dispatch: any) => {
  dispatch(changeFieldUrListenerAction(field, value));
};

export const cancelAddNewListener = () => (dispatch: any) => {
  dispatch(cancelAddNewListenerAction());
};

/* Actions */

function switchingBetweenFormsAction(typeForm: string) {
  return {type: 'SWITCHING_BETWEEN_FORM', typeForm};
}

function changeFieldAction(field: string, value: any) {
  return {type: 'CHANGE_FIELD', field, value};
}

function changeOpenAndCloseFormListenerAction(isShow: boolean) {
  return {type: 'SHOW_FORM_LISTENER', isShow};
}

function addNewListenerAction() {
  return {type: 'ADD_NEW_LISTENER'};
}

function changeFieldUrAction(field: string, value: any) {
  return {type: 'CHANGE_FIELD_UR_FACE', field, value};
}

function saveListenerAction() {
  return {type: 'SAVE_LISTENER'};
}

function deleteListenerAction(listenerId: string) {
  return {type: 'DELETE_LISTENER', listenerId};
}

function editProfileListenerAction(listenerId: string) {
  return {type: 'EDIT_PROFILE_LISTENER', listenerId};
}

function changeFieldUrListenerAction(field: string, value: any) {
  return {type: 'CHANGE_FIELD_UR_LISTENER', field, value};
}

function cancelAddNewListenerAction() {
  return {type: 'CANCEL_ADD_NEW_LISTENER'};
}
