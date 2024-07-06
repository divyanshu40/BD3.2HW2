let express = require("express");
let app = express();
let PORT = 3000;
app.listen(PORT, () => {
  console.log("This server is running");
});
// Exercise 1: Find Mobile Phone Number
let phones = [
  { number: '123-456-7890', owner: 'Alice', type: 'mobile' },
  { number: '987-654-3210', owner: 'Bob', type: 'home' }
];
function findPhoneNumber(phone, phoneNumber) {
  return phone.number === phoneNumber;
}
app.get("/phones/find", (req, res) => {
  let phoneNumber = req.query.phoneNumber;
  let result = phones.find((phone) => findPhoneNumber(phone, phoneNumber));
  res.json({ phone: result });
});
// Exercise 2: Find Bank Account Number
let accounts = [
  { number: '111122223333', holder: 'Charlie', balance: 5000 },
  { number: '444455556666', holder: 'Dave', balance: 3000 }
];
function findAccountNumber(account, accountNumber) {
  return account.number === accountNumber;
}
app.get("/accounts/find", (req, res) => {
  let accountNumber = req.query.accountNumber;
  let result = accounts.find((account) => findAccountNumber(account, accountNumber));
  res.json({ account: result });
});
// Exercise 3: Find Driver's License Number
let licenses = [
  { number: 'D1234567', name: 'Eve', expiryDate: '2026-04-01' },
  { number: 'D7654321', name: 'Frank', expiryDate: '2024-11-15' }
];
function findByLicenseNumber(license, licenseNumber) {
  return license.number === licenseNumber;
}
app.get("/licenses/find", (req, res) => {
  let licenseNumber = req.query.licenseNumber;
  let result = licenses.find((license) => findByLicenseNumber(license, licenseNumber));
  res.json({ license: result });
});
// Exercise 4: Find Employee ID
let employees = [
  { id: 'E1234', name: 'Grace', department: 'Engineering' },
  { id: 'E5678', name: 'Hank', department: 'Marketing' }
];
function findEmployeeById(employee, employeeId) {
  return employee.id === employeeId;
}
app.get("/employees/find", (req, res) => {
  let employeeId = req.query.employeeId;
  let result = employees.find((employee) => findEmployeeById(employee, employeeId));
  res.json({employee: result });
});
// Exercise 5: Find Order ID
let orders = [
  { id: 'ORD12345', customerName: 'Ivy', totalAmount: 150 },
  { id: 'ORD67890', customerName: 'Jake', totalAmount: 200 }
];
function findOrderById(order, orderId) {
  return order.id === orderId;
}
app.get("/orders/find", (req, res) => {
  let orderId = req.query.orderId;
  let result = orders.find((order) => findOrderById(order, orderId));
  res.json({ order: result });
});