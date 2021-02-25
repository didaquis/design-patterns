import { CommandInterface } from '../CommandInterface';
import { CreditCardDTO } from '../dto/CreditCardDTO';

export class MercadoPagoCommand implements CommandInterface {
	public readonly providerName: string = 'MercadoPago';

	constructor(private readonly creditCardDef: CreditCardDTO) {}

	handle(): void {
		console.log(`${this.providerName} has been triggered...`);
		// Your code goes here! Add all necessary logic (connect to service, process the payment and so on...)

		console.log(`Successful payment with ${this.providerName}`);
	}
}
