export interface IState {
  animation: boolean;
}

export enum EVisibleActionsTypes {
  SET_ANIMATION = 'SET_ANIMATION',
}

interface ISetAnimation {
  type: EVisibleActionsTypes.SET_ANIMATION;
  payload: boolean;
}

export type TVisibleActions = ISetAnimation;
