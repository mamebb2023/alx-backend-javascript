export default function createEmployeesObject(departmentName, employees) {
  const arr = {};
  arr[departmentName] = employees;

  return arr;
}
