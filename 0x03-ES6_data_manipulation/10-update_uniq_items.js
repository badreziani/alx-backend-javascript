export default function updateUniqueItems(map) {
  if (map instanceof Map) {
    return new Map([...map].map(([key, value]) => {
      if (value === 1) {
        return [key, 100];
      }

      return [key, value];
    }));
  }

  throw new Error('Cannot process');
}
