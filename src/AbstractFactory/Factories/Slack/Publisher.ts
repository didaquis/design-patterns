import ConnectorInterface from '../ConnectorInterface';
import PublisherInterface from '../PublisherInterface';

/**
 * Todas las clases de las factorías implementan las mismas interfaces.
 */

export default class SlackPublisher implements PublisherInterface {
	constructor(private connector: ConnectorInterface) {}

	publish(content: string): void {
		// Your logic to publish on Slack

		// eslint-disable-next-line no-console
		console.log('Slack');
		// eslint-disable-next-line no-console
		console.log(content);
	}
}
