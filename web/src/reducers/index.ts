import { combineReducers } from "redux";
import inputKey from "./inputKeyReducer";
import gameState from "./gameStateReducer";

export default combineReducers({
  inputKey,
  gameState
});
