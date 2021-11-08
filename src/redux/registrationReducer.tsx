import { UPDATE_REGISRATION_DATA } from './actionTypes';
import { RegistrationActionType, RegistrationDataType } from '../types/types';

const initialState: RegistrationDataType = {
  firstName: '',
  lastName: '',
  email: '',
  gender: '',
  phone: '',
};

export const registrationReducer = (
  state = initialState,
  { type, payload }: RegistrationActionType
) => {
  switch (type) {
    case UPDATE_REGISRATION_DATA:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};
