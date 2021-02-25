import ConnectorInterface from '../ConnectorInterface';
import PublisherInterface from '../PublisherInterface';

/**
 * Todas las clases de las factorías implementan las mismas interfaces.
 */

export default class SlackPublisher implements PublisherInterface {
	constructor(private connector: ConnectorInterface) {}

	publish(content: string): void {
		// Your logic to publish on Slack

		console.log('Slack');
		console.log(content);
	}
}
