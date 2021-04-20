import { modalTypes } from "./modal.types";

const INITIAL_STATE = {
  toggleModal: false,
};

export const ModalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case modalTypes.TOGGLE_MODAL:
      return {
        ...state,
        toggleModal: !state.toggleModal,
      };
    default:
      return state;
  }
};
