import TrisWA from "../assembly-api/as-ap";

export default function activeBlockDrop() {
  console.debug("action: block drop");
  return async function(dispatch: (action: any) => void) {
    if ((await TrisWA).block_drop()) {
      dispatch({
        type: "UPDATE_GAME_STATE",
        payload: (await TrisWA).GetGameState()
      });
    }
  };
}
