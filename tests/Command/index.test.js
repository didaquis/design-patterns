import { CreditCardDTO } from '../../src/Command/dto/CreditCardDTO';
import { PaymentMethodHandler } from '../../src/Command/PaymentMethodHandler';
import { CulquiCommand } from '../../src/Command/paymentTypes/Culqui';
import { PayUCommand } from '../../src/Command/paymentTypes/PayU';
import { MercadoPagoCommand } from '../../src/Command/paymentTypes/MercadoPago';

describe('Command', () => {
	let loggerFunction;

	beforeEach(() => {
		jest.restoreAllMocks();
		loggerFunction = jest.spyOn(console, 'log').mockImplementation();
	});

	afterAll(() => {
		jest.restoreAllMocks();
	});

	it('should be able to process the payment using Culqui', () => {
		const expectedResult = 'Successful payment with Culqui';
		const creditCard = new CreditCardDTO('marstercard', 'John Doe', 'xxxx-xxxx-xxxx-xxxx', 'xxx', 300.0);
		const paymentHandler = new PaymentMethodHandler();

		paymentHandler.process(new CulquiCommand(creditCard));

		expect(loggerFunction).toHaveBeenCalledWith(expectedResult);
	});

	it('should be able to process the payment using MercadoPago if PayU fails', () => {
		const expectedErrorResult = 'ERROR: PayU rejected the user credit card';
		const expectedResult = 'Successful payment with MercadoPago';
		const creditCard = new CreditCardDTO('marstercard', 'John Doe', 'xxxx-xxxx-xxxx-xxxx', 'xxx', 300.0);
		const paymentHandler = new PaymentMethodHandler();

		paymentHandler.forceToProcess([
			new PayUCommand(creditCard),
			new MercadoPagoCommand(creditCard),
			new CulquiCommand(creditCard),
		]);

		expect(loggerFunction).toHaveBeenCalledWith(expectedErrorResult);
		expect(loggerFunction).toHaveBeenCalledWith(expectedResult);
	});
});
