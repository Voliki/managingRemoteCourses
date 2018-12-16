import { v4 as uuidV4 } from 'uuid';
import { ListenerType, urFaceState, UrFaceStateType } from '../../store/urFaceState';

export function urFaceReducer(state: UrFaceStateType = urFaceState, action: any) {
  const reduceObject: any = {
    ['ADD_NEW_LISTENER']: addListener,
    ['CHANGE_FIELD_UR_FACE']: changeField,
    ['SAVE_LISTENER']: saveListener,
    ['DELETE_LISTENER']: deleteListener,
    ['CHANGE_FIELD_UR_LISTENER']: changeFieldListener,
    ['EDIT_PROFILE_LISTENER']: editListener,
    ['CANCEL_ADD_NEW_LISTENER']: cancelAddListener,
  };

  return reduceObject.hasOwnProperty(action.type) ? reduceObject[action.type](state, action) : state;
}

function addListener(state: UrFaceStateType, action: any): UrFaceStateType {
  return {
    ...state,
    selectListener: {
      ...state.selectListener,
      id: uuidV4(),
    }
  };
}

function changeField(state: UrFaceStateType, action: any): UrFaceStateType {
  return {
    ...state,
    [action.field]: action.value,
  };
}

function saveListener(state: UrFaceStateType, action: any): UrFaceStateType {
  let listeners: Array<ListenerType> = [];
  if (state.listener.length > 0) {
    const listener: ListenerType = state.listener.find(item => item.id === state.selectListener.id);
    if (!!listener) {
      listeners = [
        ...state.listener.map(item => {
          if (item.id === state.selectListener.id) {
            return state.selectListener;
          } else {
            return item;
          }
        }),
      ];
    } else {
      listeners = [
        ...state.listener,
        state.selectListener,
      ];
    }
  } else {
    listeners = [
      state.selectListener,
    ];
  }
  return {
    ...state,
    listener: [
      ...listeners,
    ],
    selectListener: urFaceState.selectListener,
  };
}

function deleteListener(state: UrFaceStateType, action: any): UrFaceStateType {
  return {
    ...state,
    listener: [
      ...state.listener.filter(item => item.id !== action.listenerId)
    ],
  };
}

function changeFieldListener(state: UrFaceStateType, action: any): UrFaceStateType {
  return {
    ...state,
    selectListener: {
      ...state.selectListener,
      [action.field]: action.value,
    },
  };
}

function editListener(state: UrFaceStateType, action: any): UrFaceStateType {
  return {
    ...state,
    selectListener: state.listener.find(item => item.id === action.listenerId),
  };
}

function cancelAddListener(state: UrFaceStateType, action: any): UrFaceStateType {
  return {
    ...state,
    selectListener: urFaceState.selectListener,
  };
}
