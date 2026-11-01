const users = [
  { name: "John", email: "john@gmail.com", age: 30 },
  { name: "Jane", email: "jane@gmail.com", age: 25 },
  { name: "Mike", email: "mike@gmail.com", age: 40 }
];

for (const { name, email, age } of users) {
  console.log(`${name} with ${email} has ${age} years old`);
}