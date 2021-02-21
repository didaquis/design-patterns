export interface VideoProviderInterface {
	getPlaylist(code: string): Promise<string[]>;
}
