import { CommandInterface } from './CommandInterface';

export class PaymentMethodHandler {
	process(command: CommandInterface): void {
		console.log('Payment method handler has been started');
		command.handle();
	}

	forceToProcess(commands: CommandInterface[]): void {
		console.log('Payment method handler has been started');
		for (const cmd of commands) {
			try {
				cmd.handle();
				break;
			} catch (error) {
				if (error instanceof Error) {
					console.log(`ERROR: ${error.message}`);
				}
			}
		}
	}
}
