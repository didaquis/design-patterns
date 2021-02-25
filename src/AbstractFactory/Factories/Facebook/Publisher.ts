import ConnectorInterface from '../ConnectorInterface';
import PublisherInterface from '../PublisherInterface';

/**
 * Todas las clases de las factorías implementan las mismas interfaces.
 */

export default class FacebookPublisher implements PublisherInterface {
	constructor(private connector: ConnectorInterface) {}

	publish(content: string): void {
		// Your logic to publish on Facebook

		console.log('Facebook');
		console.log(content);
	}
}
