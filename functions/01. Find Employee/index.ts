type Employee = {
  id: number;
  name: string;
  children?: Employee[];
};

function findEmployee(
  employees: Employee | null,
  id: number
): Employee | null {

  // Base case:
  // If employee node doesn't exist, target isn't found
  if (!employees) return null;

  // Check current employee
  if (employees.id === id) {
    return employees;
  }

  // Recursively search all child employees
  if (employees.children) {
    for (const emp of employees.children) {

      // DFS search inside subtree
      const temp = findEmployee(emp, id);

      // If employee found in subtree, return immediately
      if (temp) return temp;
    }
  }

  // Employee not found in current subtree
  return null;
}
