import { roversTypes } from "./rovers.types";

export const rovers = (rover) => ({
  type: roversTypes.ROVERS,
  payload: rover,
});

export const newRover = (rover) => ({
  type: roversTypes.NEW_ROVER,
  payload: rover,
});
