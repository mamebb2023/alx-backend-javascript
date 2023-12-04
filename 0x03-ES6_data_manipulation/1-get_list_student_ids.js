export default function getListStudentIds(arr) {
  if (Array.isArray(arr)) {
    return arr.map((row) => row.id);
  }
  return [];
}
