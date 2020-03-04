import { instantiateStreaming } from "assemblyscript/lib/loader";
import { GameState } from "../@types/tris-types";
import TrisWA from "./as-types";

let updateNum = 0;

export default instantiateStreaming<typeof TrisWA>(fetch("./as-api.wasm"), {
  index: {
    consoleLog(int: number) {
      console.log(int);
    }
  }
}).then(instance => {
  return Object.assign(instance, {
    GetGameState(): GameState {
      const { BOARD_STATE, BLOCK_STATE, __getInt32ArrayView } = instance;
      const boardState = __getInt32ArrayView(BOARD_STATE);
      const blockState = __getInt32ArrayView(BLOCK_STATE);

      const nextState = {
        activeBlock: {
          x: blockState[0],
          y: blockState[1],
          width: blockState[2],
          height: blockState[3],
          shape: blockState.slice(4)
        },
        board: boardState,
        update: updateNum++
      };
      console.log(nextState);
      return nextState;
    }
  });
});

//getActiveBlockShape,
//getActiveBlockX,
//getActiveBlockY,
//getActiveBlockWidth,
//getActiveBlockHeight,
//getBoardShape,
//__getInt32ArrayView,
