export interface IState {
  entrance: boolean;
  user: IUser | null;
  isLoading: boolean;
  error: null | IError;
  sigInLoading: boolean;
}

interface IUser {
  email: string;
  token: string;
  username: string;
  bio: string;
  image?: null | string;
}

interface IError {
  message?: string;
  image?: string;
  password?: string;
  email?: string;
  username?: string;
}

export enum EUserActionsTypes {
  SET_ENTRANCE = 'SET_ENTRANCE',
  GET_USER = 'GET_USER',
  GET_USER_SUCCESS = 'GET_USER_SUCCESS',
  GET_USER_ERROR = 'GET_USER_ERROR',
  LOG_OUT_USER = 'LOG_OUT_USER',
  SIGN_IN_USER = 'SIGN_IN_USER',
  SIGN_IN_USER_SUCCESS = 'SIGN_IN_USER_SUCCESS',
}

interface ISetEntrance {
  type: EUserActionsTypes.SET_ENTRANCE;
  payload: boolean;
}

interface IGetUser {
  type: EUserActionsTypes.GET_USER;
  payload?: undefined;
}
interface IGetUserSuccess {
  type: EUserActionsTypes.GET_USER_SUCCESS;
  payload: null | IUser;
}
interface IGetUserError {
  type: EUserActionsTypes.GET_USER_ERROR;
  payload: null | IError;
}

interface ILogOutUser {
  type: EUserActionsTypes.LOG_OUT_USER;
  payload?: null;
}

interface IUserSignIn {
  type: EUserActionsTypes.SIGN_IN_USER;
  payload: boolean;
}

export type TUserActions = ISetEntrance | IGetUser | IGetUserSuccess | IGetUserError | ILogOutUser | IUserSignIn;
