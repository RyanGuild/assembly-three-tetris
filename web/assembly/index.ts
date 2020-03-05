// The entry file of your WebAssembly module.
/// <reference path="../node_modules/assemblyscript/index.d.ts" />

//test recompile

import { BOARD_HEIGHT, BOARD_WIDTH } from "../src/Constants";
import { MaxBlockWidth, MaxBlockHeight, BlockDataLength } from "./blocks";

import { Block } from "./blocks";
import { Board } from "./board";

//export const test = 5;

export declare function consoleLog(message: i32): void;

export const BLOCK_STATE = new Int32Array(
  MaxBlockWidth * MaxBlockHeight + BlockDataLength
);
export const BOARD_STATE = new Int32Array(BOARD_HEIGHT * BOARD_WIDTH);

var GameBoard: Board;
var ActiveBlock: Block;
var NextBlock: Block;
var blockIndex = 0;

export function new_game(): void {
  blockIndex = 0;
  GameBoard = new Board();
  ActiveBlock = new Block(blockIndex++);
  update_game_state();
}

export function block_drop(): bool {
  ActiveBlock.y -= 1;
  if (GameBoard.blockColision(ActiveBlock)) {
    ActiveBlock.y += 1;
    GameBoard.mergeBlock(ActiveBlock);
    if (blockIndex > 21) blockIndex = 0;
    ActiveBlock = new Block(blockIndex++);
  }
  update_game_state();
  return true;
}

export function block_right(): bool {
  ActiveBlock.x += 1;
  if (GameBoard.blockColision(ActiveBlock)) {
    ActiveBlock.x -= 1;
    return false;
  } else {
    update_game_state();
    return true;
  }
}

export function block_left(): bool {
  ActiveBlock.x -= 1;
  if (GameBoard.blockColision(ActiveBlock)) {
    ActiveBlock.x += 1;
    return false;
  } else {
    update_game_state();
    return true;
  }
}

export function block_rotate_cw(): bool {
  ActiveBlock.RotateCW();
  if (GameBoard.blockColision(ActiveBlock)) {
    ActiveBlock.RotateCCW();
    return false;
  } else {
    update_game_state();
    return true;
  }
}

export function block_rotate_ccw(): bool {
  ActiveBlock.RotateCCW();
  if (GameBoard.blockColision(ActiveBlock)) {
    ActiveBlock.RotateCW();
    return false;
  } else {
    update_game_state();
    return true;
  }
}

function update_game_state(): void {
  for (let n = 0; n < GameBoard.size; n++) {
    BOARD_STATE[n] = GameBoard.boardData[n];
  }
  BLOCK_STATE[0] = ActiveBlock.x;
  BLOCK_STATE[1] = ActiveBlock.y;
  BLOCK_STATE[2] = ActiveBlock.width;
  BLOCK_STATE[3] = ActiveBlock.height;
  for (let i = 0; i < ActiveBlock.size; i++) {
    BLOCK_STATE[i + 4] = ActiveBlock.shape[i];
  }
}
