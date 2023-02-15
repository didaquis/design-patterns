import ConnectorInterface from './Factories/ConnectorInterface';
import PublisherInterface from './Factories/PublisherInterface';

/**
 * Todas las factorías deberan implementar estas interfaces. Esto permitirá que las factorías sean intercambiables entre ellas.
 */

export default interface AbstractFactoryInterface {
	getConnector(): ConnectorInterface;
	getPublisher(connector: ConnectorInterface): PublisherInterface;
}
