import AbstractFactoryInterface from '../../AbstractFactoryInterface';
import ConnectorInterface from '../ConnectorInterface';
import PublisherInterface from '../PublisherInterface';
import FacebookConnector from './Connector';
import FacebookPublisher from './Publisher';

/**
 * Todas las factorías (Facebook/Slack) implementan las mismas interfaces. Esto permite que las factorías sean intercambiables.
 */

export default class FacebookFactory implements AbstractFactoryInterface {
	getConnector(): ConnectorInterface {
		return new FacebookConnector();
	}

	getPublisher(connector: ConnectorInterface): PublisherInterface {
		return new FacebookPublisher(connector);
	}
}
