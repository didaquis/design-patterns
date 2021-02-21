import { VideoProviderInterface } from '../VideoProviderInterface';

type resource = {
	[key: string]: string[];
};

export class YouTubeAPI implements VideoProviderInterface {
	private playlist: resource = {
		courses: [
			'https://www.youtube.com/watch?v=Yk5TXytE-gs&list=PL9prAn3zOWZ4slyDs5y7VOxhb_Sc04ShD',
			'https://www.youtube.com/playlist?list=PLJkcleqxxobUJlz1Cm8WYd-F_kckkDvc8',
		],
		funny: ['https://www.youtube.com/watch?v=SkgTxQm9DWM', 'https://www.youtube.com/watch?v=o7cCJqya7wc'],
	};

	async getPlaylist(code: string): Promise<string[]> {
		return new Promise((resolve) => {
			setTimeout(() => {
				const result = this.playlist[code] || null;
				resolve(result);
			}, 4000); // esto es sólo para simular una API muy lenta
		});
	}
}
