// Write your solution in this file!

const employee = {
  name: "Sam",
  streetAddress: "New York City",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
  const newValue = { ...employee };
  newValue[key] = value;
  return newValue;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

function deleteFromEmployeeByKey(employee, key) {
  const removeKey = { ...employee };
  delete removeKey[key];
  return removeKey;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}
