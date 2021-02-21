import { VideoProviderInterface } from './VideoProviderInterface';

type resource = {
	[key: string]: string[];
};

export class VideoProxy implements VideoProviderInterface {
	private cache: resource = {};

	constructor(private readonly provider: VideoProviderInterface) {}

	async getPlaylist(code: string): Promise<string[]> {
		let result = this.cache[code];

		if (!result) {
			result = await this.provider.getPlaylist(code);

			// push to cache
			this.cache[code] = result;
		}

		return result;
	}
}
