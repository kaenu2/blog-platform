import { EVisibleActionsTypes, IState, TVisibleActions } from './visible-reducers.types';

const initialState: IState = {
  animation: true,
};

export const visibleReducers = (state = initialState, { type, payload }: TVisibleActions): IState => {
  switch (type) {
    case EVisibleActionsTypes.SET_ANIMATION:
      return { ...state, animation: payload };
    default:
      return state;
  }
};
