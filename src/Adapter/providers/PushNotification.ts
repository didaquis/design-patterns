import NotificationInterface from './NotificationInterface';

export default class PushNotification implements NotificationInterface {
	public post(title: string, message: string): void {
		console.log(`Push Notification: Sending ${title} - ${message}`);
	}
}
