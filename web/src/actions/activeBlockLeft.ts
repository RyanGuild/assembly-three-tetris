import TrisWA from "../assembly-api/as-ap";

export default function activeBlockLeft() {
  return async function(dispatch: (action: any) => void) {
    if ((await TrisWA).block_left()) {
      dispatch({
        type: "UPDATE_GAME_STATE",
        payload: (await TrisWA).GetGameState()
      });
    }
  };
}
