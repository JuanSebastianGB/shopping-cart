import { CartElementModel } from '@/models';
import { UPDATE_STATE_BY_ACTION_TYPE } from '../constants';

export const cartReducer = (state: CartElementModel[], action: any) => {
  const { type: actionType } = action;
  const updateState = UPDATE_STATE_BY_ACTION_TYPE[actionType];
  return updateState ? updateState(state, action) : state;
};
