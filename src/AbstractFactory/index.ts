/**
 * Abstract Factory.
 *
 * Abstract Factory es un patrón de diseño creacional que permite producir familias de objetos relacionados sin especificar sus clases concretas. Se podría decir que es la evolución de un Factory Method.
 *
 * Utiliza el patrón Abstract Factory cuando tu código deba funcionar con varias familias de clases relacionadas entre si.
 */

import AbstractFactoryInterface from './AbstractFactoryInterface'

export default class PublishOnMedia {
	constructor(private content: string) {}

	public send(factory: AbstractFactoryInterface): void {
		const connector = factory.getConnector();
		const publisher = factory.getPublisher(connector);

		connector.open();
		publisher.publish(this.content);
		connector.close();
	}
}
