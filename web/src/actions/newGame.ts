import TrisWA from "../assembly-api/as-ap";

export default function() {
  console.debug("action: new game");
  return async function(dispatch: (action: any) => void) {
    (await TrisWA).new_game();
    dispatch({
      type: "UPDATE_GAME_STATE",
      payload: (await TrisWA).GetGameState()
    });
  };
}
