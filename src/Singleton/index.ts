/*
	Singleton.
	Singleton es un patrón de diseño creacional que nos permite asegurarnos que sólo existe una instancia de una determinada clase.
	Útil para inicializar la configuración de un proyecto.
*/

import config from './configData.json';

export default class AppConfiguration {
	private static instance: AppConfiguration;

	private static _environment: string;
	private static _apiUrl: string;

	// Mark as private the constructor method
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	private constructor() {}

	// Use this method as a constructor
	private static initialize(): void {
		this._environment = config.environment;
		this._apiUrl = config.apiUrl;
	}

	public static getInstance(): AppConfiguration {
		if (!this.instance) {
			this.initialize();
			this.instance = new AppConfiguration();
		}

		return this.instance;
	}

	public get environment(): string {
		return AppConfiguration._environment;
	}

	public get apiUrl(): string {
		return AppConfiguration._apiUrl;
	}
}

/**
 * Example of use:
 * 	const configuration = AppConfiguration.getInstance(); // You can not use the word "new"
 * 	configuration.apiURL; // 'https://api.example.com/'
 */
