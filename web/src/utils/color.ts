export function I32toColor(array: Int32Array, index: number): string | null {
  let view = array.slice(index, index + 1);
  if (view[0] === 0) return null;
  let bytes = new Uint8Array(view.buffer);
  let strs = ["#"];
  strs.push(bytes[0].toString(16));
  strs.push(bytes[1].toString(16));
  strs.push(bytes[2].toString(16));
  return strs.join("");
}
