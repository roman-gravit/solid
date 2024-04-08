export { UserComplexResp, UserSPR, UserLogger };

// **S** Single-responsiblity Principle: Class has one job to do. 
// Each change in requirements can be done by changing just one class.

const GenerateId = () => Date.now() * Math.random();

////////////////////////////////
// Wrong
class UserComplexResp {
	id: number;
	username: string;
	password: string;

	constructor(username: string, password: string) {
		this.username = username;
		this.password = password;
		this.id = GenerateId();
	}

	log(): string {
		console.log(this);
		return this.toString();
	}

	toString(): string {
		return `${this.username} : ${this.password}`;
	}
}

////////////////////////////////
// Correct
class UserSPR {
	id: number;
	username: string;
	password: string;

	constructor(username: string, password: string) {
		this.username = username;
		this.password = password;
		this.id = GenerateId();
	}

	toString(): string {
		return `${this.username} : ${this.password}`;
	}
}

class UserLogger {
	log(user: UserSPR) {
		console.log(user);
		return user.toString();
	}
}