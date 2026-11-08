async function getTodo(todoId) {
	const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
	const todo = await response.json();
	return todo;
}

async function getUser(userId) {
	const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
	const user = await response.json();
	return user;
}

const allResult = Promise.all([getTodo(1), getUser(1)]);
const raceResult = Promise.race([getTodo(1), getUser(1)]);

allResult.then((result) => console.log(result)).catch((error) => console.log(error));

raceResult.then((winner) => console.log(winner)).catch((error) => console.log(error));
