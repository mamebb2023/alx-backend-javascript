export default function returnHowManyArguments(...args) {
  let sum = 0;
  // eslint-disable-next-line no-unused-vars
  for (const i of args) { sum += 1; }
  return sum;
}
