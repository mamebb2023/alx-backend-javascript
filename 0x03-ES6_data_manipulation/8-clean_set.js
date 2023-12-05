export default function cleanSet(set, startString) {
  if (!startString) {
    return '';
  }
  const str = [];
  for (const e of set) {
    if (e.startsWith(startString)) {
      str.push(e.slice(startString.length));
    }
  }
  return str.join('-');
}
