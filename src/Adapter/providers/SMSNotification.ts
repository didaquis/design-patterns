/**
 * Supongamos que esto es una librería de terceros que no podemos modificar para adaptarla a nuestro interfaz
 */

export default class SMSNotification {
	public send(phoneNumber: string, title: string, message: string): void {
		// eslint-disable-next-line no-console
		console.log(`SMS Notification: Sending ${title} - ${message} to ${phoneNumber}`);
	}
}
