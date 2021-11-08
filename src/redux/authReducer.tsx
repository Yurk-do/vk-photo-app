import { UPDATE_TOKEN, LOGIN_IN, LOGIN_OUT } from './actionTypes';
import { AuthReducerType, AuthActionType } from '../types/types';

const initialState: AuthReducerType = {
  token: '',
  isAuth: false,
};

export const authReducer = (
  state = initialState,
  { type, payload }: AuthActionType
) => {
  switch (type) {
    case UPDATE_TOKEN:
      return { ...state, token: payload };
    case LOGIN_IN:
      return { ...state, isAuth: true };
    case LOGIN_OUT:
      return { ...state, isAuth: false };
    default:
      return state;
  }
};
