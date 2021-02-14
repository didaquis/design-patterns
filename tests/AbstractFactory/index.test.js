import PublishOnMedia from '../../src/AbstractFactory';
import FacebookFactory from '../../src/AbstractFactory/Factories/Facebook/FacebookFactory';
import SlackFactory from '../../src/AbstractFactory/Factories/Slack/SlackFactory';
import FacebookConnector from '../../src/AbstractFactory/Factories/Facebook/Connector';
import FacebookPublisher from '../../src/AbstractFactory/Factories/Facebook/Publisher';
import SlackConnector from '../../src/AbstractFactory/Factories/Slack/Connector';
import SlackPublisher from '../../src/AbstractFactory/Factories/Slack/Publisher';

describe('Abstract Factory', () => {
	let loggerFunction;

	beforeEach(() => {
		jest.restoreAllMocks();
		loggerFunction = jest.spyOn(console, 'log').mockImplementation();
	});

	afterAll(() => {
		jest.restoreAllMocks();
	});

	it('PublishOnMedia should publish on Facebook', () => {
		const expectedMedia = 'Facebook';
		const content = 'Some message';
		const publisher = new PublishOnMedia(content);

		publisher.send(new FacebookFactory());

		expect(loggerFunction).toHaveBeenNthCalledWith(1, expectedMedia);
		expect(loggerFunction).toHaveBeenNthCalledWith(2, content);
	});

	it('PublishOnMedia should publish on Slack', () => {
		const expectedMedia = 'Slack';
		const content = 'Some message';
		const publisher = new PublishOnMedia(content);

		publisher.send(new SlackFactory());

		expect(loggerFunction).toHaveBeenNthCalledWith(1, expectedMedia);
		expect(loggerFunction).toHaveBeenNthCalledWith(2, content);
	});

	it('PublishOnMedia should publish on two medias', () => {
		const content = 'Example message';
		const publisher = new PublishOnMedia(content);

		publisher.send(new FacebookFactory());
		publisher.send(new SlackFactory());

		expect(loggerFunction).toHaveBeenNthCalledWith(1, 'Facebook');
		expect(loggerFunction).toHaveBeenNthCalledWith(2, content);
		expect(loggerFunction).toHaveBeenNthCalledWith(3, 'Slack');
		expect(loggerFunction).toHaveBeenNthCalledWith(4, content);
	});

	describe('Facebook Publisher', () => {
		it('should have a Facebook connector', () => {
			const facebook = new FacebookFactory();
			const connector = facebook.getConnector();
			expect(connector instanceof FacebookConnector).toEqual(true);
		});

		it('should have a Facebook publisher', () => {
			const facebook = new FacebookFactory();
			const publisher = facebook.getPublisher();
			expect(publisher instanceof FacebookPublisher).toEqual(true);
		});
	});

	describe('Slack Publisher', () => {
		it('should have a Slack connector', () => {
			const slack = new SlackFactory();
			const connector = slack.getConnector();
			expect(connector instanceof SlackConnector).toEqual(true);
		});

		it('should have a Slack publisher', () => {
			const slack = new SlackFactory();
			const publisher = slack.getPublisher();
			expect(publisher instanceof SlackPublisher).toEqual(true);
		});
	});
});
