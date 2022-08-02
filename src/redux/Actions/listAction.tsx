import {LIST} from '../constants';

export const addListData = (payload: any) => ({
  type: LIST,
  payload: payload,
});
