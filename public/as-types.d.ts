declare module ASModule {
  type i8 = number;
  type i16 = number;
  type i32 = number;
  type u8 = number;
  type u16 = number;
  type u32 = number;
  type f32 = number;
  type f64 = number;
  type bool = any;
  export function __alloc(size: u32, id: u32): u32;
  export function __retain(ptr: u32): u32;
  export function __release(ptr: u32): void;
  export function __collect(): void;
  export var __rtti_base: u32;
  export var BOARD_MATMEM_SIZE: i32;
  export var BLOCK_MATMEM_SIZE: i32;
  export var BOARD_MATMEM: u32;
  export var BLOCK_MATMEM: u32;
  export function NewBoard(): i32;
  export function Transpose(width: i32, height: i32): i32;
  export function FlipRows(width: i32, height: i32): i32;
  export function FlipColumns(width: i32, height: i32): i32;
  export function RotateCCW(width: i32, height: i32): i32;
  export function RotateCW(width: i32, height: i32): i32;
  export function Colision(boardWidth: i32, boardHeight: i32, blockWidth: i32, blockHeight: i32, x: i32, y: i32): bool;
  export function Merge(boardWidth: i32, boardHeight: i32, blockWidth: i32, blockHeight: i32, x: i32, y: i32): i32;
}
export default ASModule;
