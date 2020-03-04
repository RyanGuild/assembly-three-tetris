import { TrisState, TrisAction } from "../@types/tris-types.d";

export default function keyUp(keycode: number) {
  return function(
    dispatch: (action: TrisAction<any>) => void,
    getState: () => TrisState
  ) {
    let { inputKey } = getState();
    if (inputKey === keycode) {
      dispatch({
        type: "SET_INPUT_KEY",
        payload: null
      });
    }
  };
}
