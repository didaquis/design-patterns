// Cualquier clase puede adquirir el rol de publisher
export interface YouTubeChannelInterface extends Observable {
	addNewVideo(title: string): void;
}

// Cualquier clase puede adquirir el rol de subscriber
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SubscriberInterface extends Observer {}

export interface EventPayload {
	message: string;
	data: unknown;
}

// Interfaz para los publishers:
export interface Observable {
	attach(aSubscriber: Observer): void;
	detach(aSubscriber: Observer): void;
	notify(message: EventPayload['message'], data: EventPayload['data']): void;
}

// Interfaz para los subscribers:
export interface Observer {
	update(payload: EventPayload): void;
}
