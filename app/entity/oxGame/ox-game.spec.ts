import {OxGame} from 'app/entity/oxGame/ox-game';
describe('OxGame entity', () => {
	it('should new Oxgame correctly', () => {
		let oxGame = new OxGame();
		expect(oxGame).toBeDefined();
	});

	it('should new Oxgame with params correctly', () => {
		let state = [['','',''],['','',''],['','',''];
		let oxGame = new OxGame(1, state);
		expect(oxGame).toBeDefined();
		expect(oxGame.id).toEqual(1);
		expect(oxGame.state).toEqual(state);
	});

	it('should have state attribute', () => {
		let state = [['','',''],['','',''],['','',''];
		let oxGame = new OxGame(1, state);
		expect(oxGame).toBeDefined();
		expect(oxGame.state).toBeDefined();
	});
})