import { CommandInterface } from '../CommandInterface';
import { CreditCardDTO } from '../dto/CreditCardDTO';

export class PayUCommand implements CommandInterface {
	public readonly providerName: string = 'PayU';

	constructor(private readonly creditCardDef: CreditCardDTO) {}

	handle(): void {
		// Your code goes here! Add all necessary logic (connect to service, process the payment and so on...)

		// Simulate an unexpected error:
		throw new Error(`${this.providerName} rejected the user credit card`);
	}
}
