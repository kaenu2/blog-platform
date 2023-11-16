import { Dispatch } from 'redux';

import { EVisibleActionsTypes, TVisibleActions } from '../../reducers/visible-reducers/visible-reducers.types';

export const setVisible = (state: boolean) => {
  return (dispatch: Dispatch<TVisibleActions>) => {
    dispatch({
      type: EVisibleActionsTypes.SET_ANIMATION,
      payload: state,
    });
  };
};
