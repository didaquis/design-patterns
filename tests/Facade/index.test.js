import VideoConferenceFacade from '../../src/Facade';
import Audio from '../../src/Facade/Audio';
import Video from '../../src/Facade/Video';

jest.mock('../../src/Facade/Audio');
jest.mock('../../src/Facade/Video');

describe('Facade', () => {
	beforeEach(() => {
		Audio.mockClear();
		Video.mockClear();
	});

	afterAll(() => {
		jest.restoreAllMocks();
	});

	it('VideoConferenceFacade class should start a videoconference with audio and video', () => {
		const vc = new VideoConferenceFacade();
		const mockAudioInstance = Audio.mock.instances[0];
		const mockVideoInstance = Video.mock.instances[0];

		vc.start();

		expect(mockAudioInstance.start).toHaveBeenCalled();
		expect(mockAudioInstance.receiveAudio).toHaveBeenCalled();
		expect(mockAudioInstance.sendAudio).toHaveBeenCalled();

		expect(mockVideoInstance.startEmit).toHaveBeenCalled();
		expect(mockVideoInstance.setLayout).toHaveBeenCalled();
	});
});
