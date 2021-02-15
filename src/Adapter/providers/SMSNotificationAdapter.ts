import NotificationInterface from './NotificationInterface';
import SMSNotification from './SMSNotification';

/**
 * En vez de llamar directamente a SMSNotification, que no cumple con la interfaz "NotificationInterface", creamos este adapter que si la cumple y adaptamos aquí el código según nos haga falta. Así evitamos alterar la clase SMSNotification.
 */

export default class SMSNotificationAdapter implements NotificationInterface {
	constructor(private SMSNotification: SMSNotification) {}

	public post(title: string, message: string): void {
		const phoneNumber = this.getPhoneNumber();
		this.SMSNotification.send(phoneNumber, title, message);
	}

	private getPhoneNumber(): string {
		return '+34 666 666 666';
	}
}
