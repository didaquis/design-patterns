import { EventPayload, SubscriberInterface } from '../interfaces';

export class Subscriber implements SubscriberInterface {
	update(payload: EventPayload): void {
		// eslint-disable-next-line no-console
		console.log(`Event received: "${payload.message}" with payload: "${JSON.stringify(payload.data)}"`);
	}
}
