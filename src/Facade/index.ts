/**
 * Facade.
 *
 * Facade es un patrón de diseño estructural que permite ocultar la complejidad de uno o varios subsistemas exponiendo una interfaz simplificada.
 */

import Audio from './Audio';
import Video from './Video';
import { LAYOUT } from './Video';

export default class VideoConferenceFacade {
	private audio;
	private video;

	constructor() {
		this.audio = new Audio();
		this.video = new Video();
	}

	public start(): void {
		this.video.startEmit();
		const defaulVideoLayout = this.video.getMainLayout();
		this.video.setLayout(defaulVideoLayout);
		this.audio.start();
		this.audio.receiveAudio();
		const defaultAudioInChannel = this.audio.getDefaultInChannel();
		this.audio.sendAudio(defaultAudioInChannel);
	}

	public stop(): void {
		this.video.stopEmit();
		this.muteMic();
		this.audio.stop();
	}

	public getAvailableLayouts(): LAYOUT[] {
		return this.video.getAvailableLayouts();
	}

	public changeLayout(layout: LAYOUT): void {
		this.video.setLayout(layout);
	}

	public muteMic(): void {
		this.audio.sendAudio(null);
	}

	public unmuteMic(): void {
		const defaultAudioInChannel = this.audio.getDefaultInChannel();
		this.audio.sendAudio(defaultAudioInChannel);
	}
}
