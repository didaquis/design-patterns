import ConnectorInterface from '../ConnectorInterface';
import PublisherInterface from '../PublisherInterface';

/**
 * Todas las clases de las factorías implementan las mismas interfaces.
 */

export default class FacebookPublisher implements PublisherInterface {
	constructor(private connector: ConnectorInterface) {}

	publish(content: string): void {
		// Your logic to publish on Facebook

		// eslint-disable-next-line no-console
		console.log('Facebook');
		// eslint-disable-next-line no-console
		console.log(content);
	}
}
