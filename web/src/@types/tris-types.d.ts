export enum InputKeys {
  Left = 37,
  Up = 38,
  Right = 39,
  Down = 40,
  Space = 32,
  W = 87,
  A = 65,
  S = 83,
  D = 68,
  Shift = 16,
  Tilde = 192
}

export type BlockData = {
  x: number;
  y: number;
  width: number;
  height: number;
  shape: Int32Array;
};

export type TrisAction<T = any> = {
  type: string;
  payload: T;
};

export type GameState = {
  activeBlock: BlockData | null;
  board: Board | null;
  update: number;
};

export type TrisState = {
  inputKey: InputKeys | null;
  gameState: GameState;
};
