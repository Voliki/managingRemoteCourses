import { fizFaceState, fizFaceStateType } from './fizFaceState';
import { userState, userStateType } from './userState';

export type initialStateType = {
  fizFace: fizFaceStateType;
  user: userStateType;

};

export const initialState: initialStateType = {
  fizFace: fizFaceState,
  user: userState,
};
