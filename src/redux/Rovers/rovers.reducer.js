import { roversTypes } from "./rovers.types";

const INITIAL_STATE = {
  rovers: [],
};

export const roversReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case roversTypes.ROVERS:
      return {
        ...state,
        rovers: action.payload,
      };
    case roversTypes.NEW_ROVER:
      return {
        ...state,
        rovers: [...state.rovers, action.payload],
      };
    default:
      return state;
  }
};
