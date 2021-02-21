import { VideoProxy } from '../../src/Proxy/VideoProxy';
import { YouTubeAPI } from '../../src/Proxy/videoProviders/YouTubeAPI';

describe('Proxy', () => {
	it('VideoProxy should not get resources cached', () => {
		const proxy = new VideoProxy(new YouTubeAPI());

		expect(proxy.cache).toEqual({});
	});

	it('VideoProxy should get resources cached after the fiirst call', async () => {
		const proxy = new VideoProxy(new YouTubeAPI());
		const reource = 'courses';

		await proxy.getPlaylist(reource);

		expect(proxy.cache).not.toEqual({});
		expect(Array.isArray(proxy.cache[reource])).toBe(true);
	});
});
