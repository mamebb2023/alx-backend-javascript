export default function createInt8TypedArray(length, position, value) {
  const arrayBuffer = new ArrayBuffer(length);
  const viewBuffer = new DataView(arrayBuffer);

  if (position < length && position >= 0) {
    viewBuffer.setInt8(position, value);
  } else {
    throw Error('Position outside range');
  }
  return viewBuffer;
}
