import { RegistrationActionType, RegistrationDataType } from '../types/types';
import {
  UPDATE_TOKEN,
  LOGIN_IN,
  LOGIN_OUT,
  UPDATE_REGISRATION_DATA,
} from './actionTypes';

type AuthActionType = {
  type: string;
  payload?: string;
};

export function updateToken(newToken: string): AuthActionType {
  return {
    type: UPDATE_TOKEN,
    payload: newToken,
  };
}

export function loginIn(): AuthActionType {
  return {
    type: LOGIN_IN,
  };
}

export function loginOut(): AuthActionType {
  return {
    type: LOGIN_OUT,
  };
}

export function updateUserData(
  formData: RegistrationDataType
): RegistrationActionType {
  return {
    type: UPDATE_REGISRATION_DATA,
    payload: formData,
  };
}
