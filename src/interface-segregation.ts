export { Weapon, Pistol, RPG, Knife };
export { PistolISP, RPGISP, KnifeISP };

// **I**  Interface Segregation Principle(ISP):  
// A client should never be forced to implement an interface that it doesn’t use, or clients shouldn’t 
// be forced to depend on methods they do not use.

// Wrong
interface Weapon {
	attack(): string;
	reload(): boolean;
}


class Pistol implements Weapon {
	attack(): string {
		console.log("pistol attack");
		return "pistol attack";
	}

	reload(): boolean {
		console.log("reloaded")
		return true;
	}
}

class RPG implements Weapon {
	attack(): string {
		console.log("RPG attack");
		return "RPG attack";
	}

	reload(): boolean {
		console.log("reloaded")
		return true;
	}
}

class Knife implements Weapon {
	attack(): string {
		console.log("RPG attack");
		return "RPG attack";
	}

	reload(): boolean {
		throw new Error("reload dont needed");
	}
}

/////////// Correct //////////

interface Attacker {
	attack(): string;
}

interface Reloader {
	reload(): boolean;
}


class PistolISP implements Attacker, Reloader {
	attack(): string {
		console.log("PistolISP attack");
		return "PistolISP attack";
	}

	reload(): boolean {
		console.log("PistolISP reloaded")
		return true;
	}
}

class RPGISP implements Attacker, Reloader {
	attack(): string {
		console.log("RPGISP attack");
		return "RPGISP attack";
	}

	reload(): boolean {
		console.log("RPGISP reloaded")
		return true;
	}
}

class KnifeISP implements Attacker {
	attack(): string {
		console.log("KnifeISP attack");
		return "KnifeISP attack";
	}
}