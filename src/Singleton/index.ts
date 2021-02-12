/**
 * Singleton.
 *
 * Singleton es un patrón de diseño creacional que nos permite asegurarnos que sólo existe una instancia de una determinada clase.
 */

import config from './configData.json';

export class AppConfiguration {
	private static instance: AppConfiguration;

	private static _environment: string;
	private static _apiUrl: string;

	// Mark as private the constructor method
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	private constructor() {}

	// Use this method as a constructor
	private static initialize(): void {
		this._apiUrl = config.apiUrl;
	}

	// Implement the singleton behaviour
	public static getInstance(): AppConfiguration {
		if (!this.instance) {
			this.initialize();
			this.instance = new AppConfiguration();
		}

		return this.instance;
	}

	// Define some public getters
	public get apiUrl(): string {
		return AppConfiguration._apiUrl;
	}
}

/**
 * Example of use:
 * 	const configuration = AppConfiguration.getInstance();
 * 	configuration.apiURL; // 'https://api.example.com/'
 */
