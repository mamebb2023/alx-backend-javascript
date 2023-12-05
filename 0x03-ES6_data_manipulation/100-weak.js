export const weakMap = new WeakMap();

export function queryAPI(endPoint) {
  if (weakMap.has(endPoint)) {
    const counter = weakMap.get(endPoint);
    if (weakMap.get(endPoint) >= 4) {
      throw Error('Endpoint load is high');
    }
    weakMap.set(endPoint, (counter + 1));
  } else {
    weakMap.set(endPoint, 1);
  }
}
