import NotificationService from '../../src/Adapter';
import PushNotification from '../../src/Adapter/providers/PushNotification';
import SMSNotification from '../../src/Adapter/providers/SMSNotification';
import SMSNotificationAdapter from '../../src/Adapter/providers/SMSNotificationAdapter';

describe('Adapter', () => {
	let providers;
	let loggerFunction;

	beforeEach(() => {
		jest.restoreAllMocks();
		loggerFunction = jest.spyOn(console, 'log').mockImplementation();
		providers = [new PushNotification(), new SMSNotificationAdapter(new SMSNotification())];
	});

	afterAll(() => {
		jest.restoreAllMocks();
	});

	it('NotificationService should work with all notifications systems', () => {
		// ...
		const notificationService = new NotificationService(providers);
		notificationService.post('Amazing title', 'Awesome content');

		expect(loggerFunction).toHaveBeenNthCalledWith(1, 'Push Notification: Sending Amazing title - Awesome content');
		expect(loggerFunction).toHaveBeenNthCalledWith(
			2,
			'SMS Notification: Sending Amazing title - Awesome content to +34 666 666 666',
		);
	});
});
