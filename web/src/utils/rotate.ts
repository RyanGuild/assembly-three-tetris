export enum RotateDirection {
  Clockwise,
  CounterClockwise
}

export default function Rotate(
  direction: RotateDirection,
  matrix: Array<Array<boolean>>,
  width: number,
  height: number
) {
  if (RotateDirection.Clockwise) {
  } else if (RotateDirection.CounterClockwise) {
  }
}

export function Transpose(
  matrix: Array<Array<boolean>>,
  width: number,
  height: number
) {
  let data = matrix.flatMap(col => col); //flaten the matrix
  let size = width * height - 1; // total size
  let dataPlaceholder: boolean; // holds the element to be replaced
  let nextIndex: number;
}
