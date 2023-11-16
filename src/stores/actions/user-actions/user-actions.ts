import { Dispatch } from 'redux';

import { EUserActionsTypes, TUserActions } from '../../reducers/user-reducer/user-reducer.types';
import { UserServices } from '../../../services';

export const fetchUser = (token: string) => {
  const userServices = new UserServices();
  return async (dispatch: Dispatch<TUserActions>) => {
    try {
      dispatch({ type: EUserActionsTypes.GET_USER });
      const data = await userServices.getUser(token);
      dispatch({ type: EUserActionsTypes.GET_USER_SUCCESS, payload: data.user });
    } catch (e: any) {
      dispatch({ type: EUserActionsTypes.GET_USER_ERROR, payload: e.message });
    }
  };
};

export const setEntrance = (value: boolean) => {
  return (dispatch: Dispatch<TUserActions>) => {
    dispatch({ type: EUserActionsTypes.SET_ENTRANCE, payload: value });
  };
};

export const logOutUser = () => {
  return (dispatch: Dispatch<TUserActions>) => {
    sessionStorage.removeItem('jwt');
    dispatch({ type: EUserActionsTypes.LOG_OUT_USER });
  };
};

export const signIn = (token: string) => {
  return (dispatch: Dispatch<TUserActions>) => {
    sessionStorage.setItem('jwt', token);
    dispatch({ type: EUserActionsTypes.SET_ENTRANCE, payload: true });
  };
};

export const signInLoading = (value: boolean) => {
  return (dispatch: Dispatch<TUserActions>) => {
    dispatch({ type: EUserActionsTypes.SIGN_IN_USER, payload: value });
  };
};

export const editUser = (token: string | null, body: any) => {
  const userServices = new UserServices();
  return async (dispatch: Dispatch<TUserActions>) => {
    try {
      dispatch({ type: EUserActionsTypes.GET_USER });
      const data = await userServices.editProfile(token, body);
      const newToken = data.user.token;
      sessionStorage.setItem('jwt', newToken);
      dispatch({ type: EUserActionsTypes.GET_USER_SUCCESS, payload: data.user });
    } catch (e: any) {
      dispatch({ type: EUserActionsTypes.GET_USER_ERROR, payload: JSON.parse(e.message).errors });
    }
  };
};
