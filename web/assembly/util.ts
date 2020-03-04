export function toInt32Array(array: Array<i32>): Int32Array {
  const result = new Int32Array(array.length);
  for (let i = 0; i < array.length; i++) {
    result[i] = array[i];
  }
  return result;
}
