export default function cleanSet(set, startString) {
  if (set instanceof Set && typeof startString === 'string') {
    const arr = Array.from(set);
    return arr.filter(item => item.startsWith(startString)).join('-');
  }

  return '';
}
