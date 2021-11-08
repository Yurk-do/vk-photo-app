export type RegistrationActionType = {
  type: string;
  payload: RegistrationDataType;
};

export type RegistrationDataType = {
  firstName: string;
  lastName: string;
  email?: string;
  gender: string;
  phone: ''
};

export type AuthActionType = {
  type: string;
  payload?: string;
};

export type AuthReducerType = {
  token: string;
  isAuth: boolean;
};


export type RootReducerType = {
  auth: AuthReducerType,
  registration: RegistrationDataType,
}