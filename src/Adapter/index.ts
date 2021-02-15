/**
 * Adapter.
 *
 * Adapter es un patrón de diseño estructural que permite la colaboración entre objetos con interfaces incompatibles.
 *
 * Útil cuando no puedes modificar una clase (por ejemplo cuando es una librería de terceros). O Cuando dos clases que quieres usar de manera intercambiable tienen interfaces incompatibles.
 */

import NotificationInterface from './providers/NotificationInterface';

export default class NotificationService {
	constructor(private providers: NotificationInterface[]) {}

	public post(title: string, message: string): void {
		this.providers.forEach((p) => {
			// Pese a que uno de los providers no tiene un método post, esto va a funcionar gracias al adapter
			p.post(title, message);
		});
	}
}
