import { combineReducers } from "redux";

import { ModalReducer } from "./Modal/modal.reducers";
import { roversReducer } from "./Rovers/rovers.reducer";

const rootReducer = combineReducers({
  modal: ModalReducer,
  rovers: roversReducer,
});

export default rootReducer;
