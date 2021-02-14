import ConnectorInterface from '../ConnectorInterface';

/**
 * Todas las clases de las factorías implementan las mismas interfaces.
 */

export default class FacebookConnector implements ConnectorInterface {
	open(): void {
		// Logic to make a valid connection
	}

	close(): void {
		// Logic to close the current connection
	}
}
