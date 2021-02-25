export enum IN_CHANNEL {
	ONE = 'XC200',
	TWO = 'DA210-DANTE',
}

enum OUT_CHANNEL {
	ONE = 'B602',
	TWO = 'DA613-DANTE',
}

export default class Audio {
	public start(): void {
		// logic
	}

	public stop(): void {
		// logic
	}

	public sendAudio(channel: IN_CHANNEL | null): void {
		console.log(`Sending audio of channel ${channel}`);
	}

	public receiveAudio(channel: OUT_CHANNEL = OUT_CHANNEL.ONE): void {
		console.log(`Receiving audio from channel ${channel}`);
	}

	public getDefaultInChannel(): IN_CHANNEL {
		return IN_CHANNEL.ONE;
	}
}
