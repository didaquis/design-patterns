import AbstractFactoryInterface from '../../AbstractFactoryInterface';
import ConnectorInterface from '../ConnectorInterface';
import PublisherInterface from '../PublisherInterface';
import SlackConnector from './Connector';
import SlackPublisher from './Publisher';

/**
 * Todas las factorías (Facebook/Slack) implementan las mismas interfaces. Esto permite que las factorías sean intercambiables.
 */

export default class SlackFactory implements AbstractFactoryInterface {
	getConnector(): ConnectorInterface {
		return new SlackConnector();
	}

	getPublisher(connector: ConnectorInterface): PublisherInterface {
		return new SlackPublisher(connector);
	}
}
