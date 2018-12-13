import { userState, userStateType } from '../../store/userState';

export default function userReducer(state: userStateType = userState, action: any) {
  const reduceObject: any = {};

  return reduceObject.hasOwnProperty(action.type) ? reduceObject[action.type](state, action) : state;
}
