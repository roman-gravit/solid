export { Weapon, Character, WeaponOCP, CharacterOCP, Sword, Crossbow, Knife };

// Open-closed Principle: Objects or entities should be open for extension but closed for modification.
// Pro: 
//   - no need to do regression tests
//   - less errors occur


// Wrong: change existing
class Weapon {
	type: string;
	/** 0-100 */
	damage: number; 
	/** 0-100 */
	range: number;

	constructor(type: string, damage: number, range: number) {
		this.damage = damage;
		this.type = type;
		this.range = range;
	}

	attack(): string {
		if(this.type === "sword") {
			const res = `sword attack damage ${this.damage}`;
			console.log(res);
			return res;
		} else {
			const res = `crossbow attack damage ${this.damage}`;
			console.log(res);
			return res;
		}
	}
}

class Character {
	name: string;
	weapon: Weapon;

	constructor(name: string, weapon: Weapon) {
		this.name = name;
		this.weapon = weapon;
	}

	changeWeapon(new_weapon: Weapon) {
		this.weapon = new_weapon;
	}

	attack(): string {
		return this.weapon.attack();
	}
}


// Correct

interface Attacker {
	attack(): string;
}

class WeaponOCP implements Attacker{
	/** 0-100 */
	damage: number; 
	/** 0-100 */
	range: number;

	constructor(damage: number, range: number) {
		this.damage = damage;
		this.range = range;
	}

	attack(): string { return "";}
}

class Sword extends WeaponOCP {
	attack(): string {
		const res = `sword attack damage ${this.damage}`;
		console.log(res);	
		return res;	
	}
}

class Crossbow extends WeaponOCP {
	attack(): string {
		const res = `crossbow attack damage ${this.damage}`;
		console.log(res);	
		return res;	
	}
}


class Knife extends WeaponOCP {
	attack(): string {
		const res = `knife attack damage ${this.damage}`;
		console.log(res);	
		return res;	
	}
}

class CharacterOCP {
	name: string;
	weapon: WeaponOCP;

	constructor(name: string, weapon: WeaponOCP) {
		this.name = name;
		this.weapon = weapon;
	}

	changeWeapon(new_weapon: WeaponOCP) {
		this.weapon = new_weapon;
	}

	attack(): string {
		return this.weapon.attack();
	}
}