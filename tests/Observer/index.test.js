import { YouTubeChannel } from '../../src/Observer/publishers/YouTubeChannel';
import { Subscriber } from '../../src/Observer/subscribers/Subscriber';

describe('Observer', () => {
	let loggerFunction;

	beforeEach(() => {
		jest.restoreAllMocks();
		loggerFunction = jest.spyOn(console, 'log').mockImplementation();
	});

	afterAll(() => {
		jest.restoreAllMocks();
	});

	it('should receive an event from publisher for each subscriber', () => {
		const channel = new YouTubeChannel();
		const user_01 = new Subscriber();
		const user_02 = new Subscriber();
		const expectedResult =
			'Event received: "Added a new video" with payload: "{"videoTitle":"Tutorial of design patterns"}"';

		channel.attach(user_01);
		channel.attach(user_02);
		channel.addNewVideo('Tutorial of design patterns');

		expect(loggerFunction).toHaveBeenCalledTimes(2);
		expect(loggerFunction).toHaveBeenNthCalledWith(1, expectedResult);
		expect(loggerFunction).toHaveBeenNthCalledWith(2, expectedResult);
	});
});
