import { TrisAction, GameState } from "../@types/tris-types";
import { BOARD_HEIGHT, BOARD_WIDTH } from "../Constants";

const initialState = {
  board: null,
  activeBlock: null,
  update: -1
};

export default function gameStateReducer(
  state = initialState,
  action: TrisAction<GameState>
): GameState {
  switch (action.type) {
    case "@@init":
      return { ...initialState };
    case "UPDATE_GAME_STATE":
      return action.payload;
    default:
      return state;
  }
}
