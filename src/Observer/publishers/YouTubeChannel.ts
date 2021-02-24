import { YouTubeChannelInterface, EventPayload, Observer } from '../interfaces';

export class YouTubeChannel implements YouTubeChannelInterface {
	private channelSubscribers: Observer[] = [];

	attach(aSubscriber: Observer): void {
		this.channelSubscribers.push(aSubscriber);
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	detach(aSubscriber: Observer): void {
		// to-do: implementar eliminar subscriber from channelSubscribers
	}

	notify(message: EventPayload['message'], data: EventPayload['data']): void {
		const payload = {
			message: message,
			data: data,
		};

		for (const suscriptor of this.channelSubscribers) {
			suscriptor.update(payload);
		}
	}

	addNewVideo(title: string): void {
		this.notify('Added a new video', { videoTitle: title });
	}
}
