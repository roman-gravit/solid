import { UserComplexResp, UserSPR, UserLogger } from "../src/single-responsibility";
import { Weapon, Character, Sword, Crossbow, Knife, CharacterOCP } from "../src/open-close";
import { Database, MySqlDatabase, MongoDatabase  } from "../src/liskov";

test("liskov", () => {

	const db = new Database();
	db.connect();
	const res = db.joinTable();
	expect(res).toEqual(true);

	const dbSql = new MySqlDatabase();
	dbSql.connect();
	const res1 = dbSql.joinTable();
	expect(res1).toEqual(true);

	// Fill fail!!!
	//const dbMongo = new MongoDatabase();
	//dbMongo.connect();
	//const res2 = dbMongo.joinTable();
	//expect(res2).toEqual(true);

});


test("open-close", () => {

	const sword = new Weapon("sword", 15, 2);
	const character = new Character("Mike", sword);
	const res = character.attack();
	expect(res).toEqual("sword attack damage 15");

	const crossbow = new Weapon("crossbow", 40, 100);
	character.changeWeapon(crossbow);
	const res2 = character.attack();
	expect(res2).toEqual("crossbow attack damage 40");

	// OCP
	const sword3 = new Sword(15, 2);
	const character3 = new CharacterOCP("Mike", sword3);
	const res3 = character3.attack();
	expect(res3).toEqual("sword attack damage 15");

	const crossbow4 = new Crossbow(40, 100);
	character3.changeWeapon(crossbow4);
	const res4 = character3.attack();
	expect(res4).toEqual("crossbow attack damage 40");

	const knife = new Knife(10, 5);
	character3.changeWeapon(knife);
	const res5 = character3.attack();
	expect(res5).toEqual("knife attack damage 10");
});


test("single-responsibility", () => {

	const user = new UserComplexResp("user", "qwerty");
	const log = user.log();
	expect(log).toEqual("user : qwerty");

	const user2 = new UserSPR("user2", "qwerty2");
	const logger = new UserLogger();
	const log2 = logger.log(user2);
	expect(log2).toEqual("user2 : qwerty2");
});
