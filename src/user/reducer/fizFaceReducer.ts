import { fizFaceState, fizFaceStateType } from '../../store/fizFaceState';

export default function fizFaceReducer(state: fizFaceStateType = fizFaceState, action: any) {
  const reduceObject: any = {
    'CHANGE_FIELD': changeField,
  };

  return reduceObject.hasOwnProperty(action.type) ? reduceObject[action.type](state, action) : state;
}

function changeField(state: fizFaceStateType, action: any): fizFaceStateType {
  return {
    ...state,
    [action.field]: action.value,
  };
}
