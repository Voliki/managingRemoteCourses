import { userState, userStateType } from '../../store/userState';

export default function userReducer(state: userStateType = userState, action: any) {
  const reduceObject: any = {
    ['SWITCHING_BETWEEN_FORM']: switchingBetweenForms,
  };

  return reduceObject.hasOwnProperty(action.type) ? reduceObject[action.type](state, action) : state;
}

function switchingBetweenForms(state: userStateType, action: any): userStateType {
  return {
    ...state,
    typeForm: action.typeForm,
  };
}
