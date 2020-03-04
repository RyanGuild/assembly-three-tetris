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
  export function consoleLog(message: i32): void;
  export var BLOCK_STATE: u32;
  export var BOARD_STATE: u32;
  export function new_game(): void;
  export function block_drop(): bool;
  export function block_right(): bool;
  export function block_left(): bool;
  export function block_rotate_cw(): bool;
  export function block_rotate_ccw(): bool;
}
export default ASModule;
