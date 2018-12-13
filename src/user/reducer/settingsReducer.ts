import { settingsState, settingsStateType } from '../../store/settingsState';

export default function settingsReducer(state: settingsStateType = settingsState, action: any) {
  const reduceObject: any = {
    ['SWITCHING_BETWEEN_FORM']: switchingBetweenForms,
    ['ADD_NEW_LISTENER']: showModal,
    ['SHOW_FORM_LISTENER']: changeShowModal,
    ['SAVE_LISTENER']: saveListener,
  };

  return reduceObject.hasOwnProperty(action.type) ? reduceObject[action.type](state, action) : state;
}

function switchingBetweenForms(state: settingsStateType, action: any): settingsStateType {
  return {
    ...state,
    typeForm: action.typeForm,
  };
}

function showModal(state: settingsStateType, action: any): settingsStateType {
  return {
    ...state,
    isShowModalFormListener: true,
  };
}

function changeShowModal(state: settingsStateType, action: any): settingsStateType {
  return {
    ...state,
    isShowModalFormListener: action.isShow
  };
}

function saveListener(state: settingsStateType, action: any): settingsStateType {
  return {
    ...state,
    isShowModalFormListener: false,
  };
}
