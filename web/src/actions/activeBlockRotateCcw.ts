import { TrisState } from "../@types/tris-types";
import TrisWA from "../assembly-api/as-ap";

export default function activeBlockRotateCcw() {
  return async function(dispatch: (action: any) => void) {
    if ((await TrisWA).block_rotate_ccw()) {
      dispatch({
        type: "UPDATE_GAME_STATE",
        payload: (await TrisWA).GetGameState()
      });
    }
  };
}
