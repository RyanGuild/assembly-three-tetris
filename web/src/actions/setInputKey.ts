import { InputKeys, TrisAction } from "../@types/tris-types.d";

export default function setInput(
  keycode: number
): TrisAction<InputKeys | null> | null {
  if (keycode in InputKeys) {
    return {
      type: "SET_INPUT_KEY",
      payload: keycode
    };
  } else {
    return null;
  }
}
