import { BOARD_WIDTH, BOARD_HEIGHT } from "../src/Constants";
import { BlockShapes, BlockOffsets } from "./blockData";

//Blocks Shapes are a singly linked list of structs
//all entries are structured i32[width, height, ...colorBitmap]
//created by scratch.ts in Quokka

export const MaxBlockWidth = 5;
export const MaxBlockHeight = 5;
export const BlockDataLength = 4;

export class Block {
  x: i32;
  y: i32;
  width: i32;
  height: i32;
  size: i32;
  shape: Int32Array;
  constructor(index: i32) {
    let offset = BlockOffsets[index];
    this.x = BOARD_WIDTH / 2;
    this.y = BOARD_HEIGHT;
    this.width = BlockShapes[offset];
    this.height = BlockShapes[offset + 1];
    assert(this.width <= 5, "block width is too large");
    assert(this.height <= 5, "block height is too large");
    this.size = this.width * this.height;
    this.shape = new Int32Array(this.size);
    assert(
      this.size <= this.shape.length,
      "shape vector is not large enough for the block"
    );
    for (let i = 0; i < this.size; i++) {
      this.shape[i] = BlockShapes[offset + 2 + i];
    }
  }

  private Transpose(): void {
    let size: i32 = this.width * this.height;
    let target = new Int8Array(size);
    for (let n = 0; n < size; n++) {
      let i = n / this.width;
      let j = n % this.width;
      target[n] = this.shape[this.height * j + i];
    }
    for (let n = 0; n < size; n++) {
      this.shape[n] = target[n];
    }
    let tempW = this.width;
    this.width = this.height;
    this.height = tempW;
  }

  private FlipY(): void {
    for (let x = 0; x < this.width; x++) {
      let tempCol = new Int8Array(this.height);
      for (let y = 0; y < this.height; y++) {
        tempCol[y] = this.shape[x * this.height + y];
      }
      tempCol = tempCol.reverse();
      for (let n = 0; n < this.height; n++) {
        this.shape[x * this.height + n] = tempCol[n];
      }
    }
  }

  private FlipX(): void {
    for (let y = 0; y < this.height; y++) {
      let tempRow = new Int8Array(this.height);
      for (let x = 0; x < this.width; x++) {
        tempRow[y] = this.shape[x * this.height + y];
      }
      tempRow = tempRow.reverse();
      for (let n = 0; n < this.width; n++) {
        this.shape[n * this.height + y] = tempRow[n];
      }
    }
  }

  public RotateCCW(): void {
    this.FlipX();
    this.Transpose();
  }

  public RotateCW(): void {
    this.FlipY();
    this.Transpose();
  }
}
