/**
 * Esta interfaz será compartidas entre todas las clases que implementen la Abstract Factory
 */

export default interface ConnectorInterface {
	open(): void;
	close(): void;
}
