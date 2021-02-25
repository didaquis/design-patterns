export interface CommandInterface {
	providerName: string;
	handle(): void;
}
