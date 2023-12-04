export default function getListStudents() {
  const map = [];

  map.push({ id: 1, firstname: 'Guillaume', location: 'San Francisco' });
  map.push({ id: 2, firstname: 'James', location: 'Columbia' });
  map.push({ id: 5, firstname: 'Serena', location: 'San Francisco' });

  return (map);
}
