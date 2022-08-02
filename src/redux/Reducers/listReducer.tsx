import {LIST} from '../constants';

const initialState = {
  list: [],
};

const listReducer = (
  state = initialState,
  action: {type: any; payload: any},
) => {
  switch (action.type) {
    case LIST: {
      return {
        ...state,
        list: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default listReducer;
