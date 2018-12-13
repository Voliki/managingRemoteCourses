import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import userReducer from '../user/reducer/userReducer';
import fizFaceReducer from '../user/reducer/fizFaceReducer';
import settingsReducer from '../user/reducer/settingsReducer';
import { urFaceReducer } from '../user/reducer/urFaceReducer';

export default function createReducer(injectedReducers: any) {
  return combineReducers({
    user: userReducer,
    fizFace: fizFaceReducer,
    urFace: urFaceReducer,
    settings: settingsReducer,
    router: routerReducer,
    ...injectedReducers,
  });
}