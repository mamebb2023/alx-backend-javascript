export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') return '';
  const str = [];
  for (const e of set) {
    if (typeof e === 'string' && e.startsWith(startString)) {
      str.push(e.slice(startString.length));
    }
  }
  return str.join('-');
}
