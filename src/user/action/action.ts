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

export const saveListener = (listener: ListenerType) => (dispatch: any) => {
  dispatch(saveListenerAction(listener));
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

function saveListenerAction(listener: ListenerType) {
  return {type: 'SAVE_LISTENER', listener};
}
