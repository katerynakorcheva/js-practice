function getTodo() {
  return fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => response.json());
}

function getUser() {
  return fetch('https://jsonplaceholder.typicode.com/users/1')
    .then((response) => response.json());
}

const allResult = Promise.all([getTodo(), getUser()]);
const raceResult = Promise.race([getTodo(), getUser()]);

allResult
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

raceResult
  .then((winner) => console.log(winner))
  .catch((error) => console.log(error));
