export enum LAYOUT {
	PIP = 'PiP',
	PAP = 'PaP',
	FULL = 'Full',
}

export default class Video {
	public startEmit(): void {
		// logic
	}

	public stopEmit(): void {
		// logic
	}

	public setLayout(layout: LAYOUT = LAYOUT.PIP): void {
		console.log(`Set video layout to ${layout}`);
	}

	public getMainLayout(): LAYOUT {
		return LAYOUT.PIP;
	}

	public getAvailableLayouts(): LAYOUT[] {
		return [LAYOUT.PIP, LAYOUT.PAP, LAYOUT.FULL];
	}
}
