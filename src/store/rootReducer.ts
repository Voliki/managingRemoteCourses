import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import userReducer from '../user/reducer/userReducer';
import fizFaceReducer from '../user/reducer/fizFaceReducer';

export default function createReducer(injectedReducers: any) {
  return combineReducers({
    user: userReducer,
    fizFace: fizFaceReducer,
    router: routerReducer,
    ...injectedReducers,
  });
}