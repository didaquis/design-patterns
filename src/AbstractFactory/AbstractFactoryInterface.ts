import ConnectorInterface from './Factories/ConnectorInterface';
import PublisherInterface from './Factories/PublisherInterface';

/**
 * Todas las factorías deberan implementar estas interfaces. Esto permitirá que las factorías sean intercambiables entre ellas.
 *
 * Si te fijas, esta interfaz es una fábrica de fábricas. También puedes verlo como una clase que permite crear familias de clases.
 */

export default interface AbstractFactoryInterface {
	getConnector(): ConnectorInterface;
	getPublisher(connector: ConnectorInterface): PublisherInterface;
}
