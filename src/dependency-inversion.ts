// **D**  Dependency Inversion Principle: 
// Entities must depend on abstractions, not on concretions. It states that the high-level module must not 
// depend on the low-level module, but they should depend on abstractions.

class YandexMusicAPI {
	get() {
		console.log("YandexMusicAPI get");
	}
}


const MusicApp = () => {
	const api = new YandexMusicAPI();
	api.get();
}