export { Database, MySqlDatabase, MongoDatabase };
export { MySqlDatabaseLSP, MongoDatabaseLSP };

// Liskov Substitution Principle(LSP): 
// Class can be replaced by any of its children. 
// Children classes inherit parent's behaviours.
// Children class must add and not replace the parent class.

// Wrong
class Database {
	connect() {
		console.log("connect");
	}
	read() {
		console.log("read");
	}
	write() {
		console.log("write");
	}
	joinTable(): boolean {
		console.log("joinTable");
		return true;
	}
}


class MySqlDatabase extends  Database {
	joinTable(): boolean {
		console.log("MySqlDatabase: joinTable");
		return true;
	}
}

class MongoDatabase extends  Database {
	joinTable(): boolean {
		throw new Error("non relative DB");
	}
}

// Correct
class DatabaseLSP {
	connect() {
		console.log("connect");
	}
	read() {
		console.log("read");
	}
	write() {
		console.log("write");
	}
}

class MySqlDatabaseLSP extends  DatabaseLSP {
	joinTable(): boolean {
		console.log("MySqlDatabase: joinTable");
		return true;
	}
}

class MongoDatabaseLSP extends  DatabaseLSP {
	createIndex(): boolean {
		console.log("MongoDatabaseLSP: createIndex");
		return true;
	}
}
