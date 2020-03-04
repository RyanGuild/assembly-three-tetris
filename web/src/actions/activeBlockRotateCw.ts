import { TrisState } from "../@types/tris-types";
import TrisWA from "../assembly-api/as-ap";

export default function activeBlockRotateCw() {
  return async function(
    dispatch: (action: any) => void,
    getState: () => TrisState
  ) {
    if ((await TrisWA).block_rotate_cw()) {
      dispatch({
        type: "UPDATE_GAME_STATE",
        payload: (await TrisWA).GetGameState()
      });
    }
  };
}
