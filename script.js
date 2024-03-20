// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector("#add-employees-btn");

let employeesNames = [];

// Collect employee data
const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects
  let addNewEmployee = true;

  while (addNewEmployee) {
    // console.log(`start loop while here`);
    let firstName = prompt("Enter the employee's FIRST name");
    // console.log(`Employee's FIRST name is ${firstName}.`);
    let lastName = prompt("Enter the employee's LAST name");
    // console.log(`Employee's LAST name is ${lastName}.`);
    let salary = prompt("Enter the employee's SALARY");
    if (isNaN(parseFloat(salary))) {
      alert(`Invalid salary input! Setting salary to $0`);
      salary = 0;
    } else {
      salary = parseFloat(salary);
    }
    // console.log(`Employee's salary is $` + salary.toFixed(2));

    employeesNames.push({
      firstName: firstName,
      lastName: lastName,
      salary: salary,
    });

    let addNewEmployeeInput = confirm(`Do you want to add another employee?`);
    if (!addNewEmployeeInput) {
      addNewEmployee = false;
    }
  }
  return employeesNames;
};

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
  let totalSalary = 0;
  let numEmployees = employeesNames.length;

  for (let eachEmployee of employeesNames) {
    totalSalary += eachEmployee.salary;
  }

  let averageSalary = totalSalary / numEmployees;

  console.log(
    `The average employee salary between our ${numEmployees} employees(s) is $${averageSalary.toFixed(
      2
    )}! `
  );
};

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee

  let getWinner =
    employeesNames[Math.floor(Math.random() * employeesNames.length)];

  console.log(
    `Congratulations to ${getWinner.firstName} ${getWinner.lastName}, our random drawing winner!`
  );
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector("#employee-table");

  // Clear the employee table
  employeeTable.innerHTML = "";

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log("==============================");

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener("click", trackEmployeeData);
