import { FETCH_ALL_DATA } from "../constants/app";

const initialState = {
  episodes: []
};

export const app = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_DATA:
      return {
        ...state,
        episodes: action.data,
      };
    default:
      return state;
  }
};
