import { TrisAction, InputKeys } from "../@types/tris-types.d";

export default function inputKeyReducer(
  state = null,
  action: TrisAction<InputKeys>
): InputKeys | null {
  switch (action.type) {
    case "SET_INPUT_KEY":
      return action.payload;
    default:
      return state;
  }
}
