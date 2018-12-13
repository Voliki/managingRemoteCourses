import { fizFaceState, fizFaceStateType } from './fizFaceState';
import { userState, userStateType } from './userState';
import { settingsState, settingsStateType } from './settingsState';
import { urFaceState, UrFaceStateType } from './urFaceState';

export type initialStateType = {
  fizFace: fizFaceStateType;
  urFace: UrFaceStateType;
  user: userStateType;
  settings: settingsStateType;
};

export const initialState: initialStateType = {
  fizFace: fizFaceState,
  urFace: urFaceState,
  user: userState,
  settings: settingsState,
};
