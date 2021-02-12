import { welcome } from '../src';

describe('welcome', () => {
	it('should exist', () => {
		expect(welcome).toBeDefined();
	});

	it('should return a welcome message', () => {
		expect(welcome()).toBe('Enjoy this examples of design patterns');
	});
});
