const userType = ["admin", "user", "guest"];
const { faker } = require("@faker-js/faker");

let randomUserType = () => {
	let randomIndex = Math.floor(Math.random() * userType.length);
	return userType[randomIndex];
};

const userData = [...Array(100)].map((user) => ({
	username: faker.internet.userName(),
	userType: randomUserType(),
	password: faker.internet.password(),
	email: faker.internet.exampleEmail(),
}));


module.exports = userData;
