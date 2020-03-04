import TrisWA from "../assembly-api/as-ap";

export default function activeBlockRight() {
  return async function(dispatch: (action: any) => void) {
    if ((await TrisWA).block_right()) {
      dispatch({
        type: "UPDATE_GAME_STATE",
        payload: (await TrisWA).GetGameState()
      });
    }
  };
}
