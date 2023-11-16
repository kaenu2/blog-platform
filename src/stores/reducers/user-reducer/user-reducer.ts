import { EUserActionsTypes, IState, TUserActions } from './user-reducer.types';

const initialState: IState = {
  entrance: false,
  user: null,
  error: null,
  isLoading: false,

  sigInLoading: false,
};

export const userReducer = (state = initialState, { type, payload }: TUserActions): IState => {
  switch (type) {
    case EUserActionsTypes.SET_ENTRANCE:
      return { ...state, entrance: payload };
    case EUserActionsTypes.GET_USER:
      return { ...state, error: null, isLoading: true };
    case EUserActionsTypes.GET_USER_SUCCESS:
      return { ...state, user: payload, error: null, isLoading: false };
    case EUserActionsTypes.GET_USER_ERROR:
      return { ...state, error: payload, isLoading: false };
    case EUserActionsTypes.LOG_OUT_USER:
      return { ...state, user: null, entrance: false };
    case EUserActionsTypes.SIGN_IN_USER:
      return { ...state, sigInLoading: payload };
    default:
      return state;
  }
};
