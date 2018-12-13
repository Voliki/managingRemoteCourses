import { urFaceState, UrFaceStateType } from '../../store/urFaceState';

export function urFaceReducer(state: UrFaceStateType = urFaceState, action: any) {
  const reduceObject: any = {
    // ['ADD_NEW_LISTENER']: addListener,
    ['CHANGE_FIELD_UR_FACE']: changeField,
    ['SAVE_LISTENER']: saveListener,
  };

  return reduceObject.hasOwnProperty(action.type) ? reduceObject[action.type](state, action) : state;
}

// function addListener(state: UrFaceStateType, action: any): UrFaceStateType {
//   return {
//     ...state,
//   };
// }

function changeField(state: UrFaceStateType, action: any): UrFaceStateType {
  return {
    ...state,
    [action.field]: action.value,
  };
}

function saveListener(state: UrFaceStateType, action: any): UrFaceStateType {
  return {
    ...state,
    listener: [
      ...state.listener,
      action.listener,
    ],
  };
}
