import { Block } from "./blocks";
import { BOARD_HEIGHT, BOARD_WIDTH } from "../src/Constants";
import { consoleLog } from "./index";

export class Board {
  boardData: Int32Array;
  width: i32;
  height: i32;
  size: i32;
  constructor() {
    this.width = BOARD_WIDTH;
    this.height = BOARD_HEIGHT;
    this.size = BOARD_WIDTH * BOARD_HEIGHT;
    this.boardData = new Int32Array(this.size);
  }

  blockColision(block: Block): bool {
    let x = block.x;
    let y = block.y;
    let width = block.width;
    let height = block.height;
    if (x < 0) return true;
    if (x + width > this.width) return true;
    if (y - height < 0) return true;
    if (y > this.height) return true;
    for (let tx = x; tx < width + x; tx++) {
      for (let ty = y; ty < height + y; ty++) {
        if (this.boardData[tx * this.height + ty - 1] != 0) {
          if (block.shape[(tx - x) * height + (ty - y)] != 0) {
            return true;
          }
        }
      }
    }
    return false;
  }

  mergeBlock(block: Block): void {
    let blockWidth = block.width;
    let blockHeight = block.height;
    let x = block.x;
    let y = block.y;
    let shape = block.shape;
    for (let tx = x; tx < blockWidth + x; tx++) {
      for (let ty = y; ty < blockHeight + y; ty++) {
        if (shape[(tx - x) * blockHeight + (ty - y)] != 0) {
          this.boardData[tx * this.height + ty - 1] =
            shape[(tx - x) * blockHeight + (ty - y)];
        }
      }
    }
  }
}
