export default function getStudentsByLocation(arr, city) {
  if (Array.isArray(arr)) {
    return arr.filter((row) => row.location === city);
  }
  return [];
}
