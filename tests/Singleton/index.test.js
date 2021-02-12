import { AppConfiguration } from '../../src/Singleton';

describe('AppConfiguration (singleton pattern)', () => {
	it('should return the same instance', () => {
		const configuration_1 = AppConfiguration.getInstance();
		const configuration_2 = AppConfiguration.getInstance();
		expect(configuration_1).toEqual(configuration_2);
	});

	it('should return the public properties', () => {
		const configuration = AppConfiguration.getInstance();
		const expectedResult = 'https://api.example.com/';
		expect(configuration.apiUrl).toBe(expectedResult);
	});
});
