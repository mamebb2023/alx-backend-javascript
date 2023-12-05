export default function getStudentIdsSum(arr) {
  if (Array.isArray(arr)) {
    return arr.reduce((sum, val, i) => {
      if (i === 1) {
        return sum.id + val.id;
      }
      return sum + val.id;
    });
  }
  return [];
}
