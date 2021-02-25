type CreditCardType = 'visa' | 'marstercard';

export class CreditCardDTO {
	constructor(
		private readonly cardtype: CreditCardType,
		private readonly cardCustomerFullName: string,
		private readonly cardNumber: string,
		private readonly cardCcv: string,
		private readonly transactionAmount: number,
	) {}
}
