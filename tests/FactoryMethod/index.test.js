import Order from '../../src/FactoryMethod';
import PaymentType from '../../src/FactoryMethod/AllPaymentMethods/types';

import MasterCard from '../../src/FactoryMethod/AllPaymentMethods/MasterCard';
import PayPal from '../../src/FactoryMethod/AllPaymentMethods/PayPal';

let order;

describe('Order using Mastercard', () => {
	beforeEach(() => {
		order = new Order(PaymentType.Mastercard, 100);
	});

	it('should be paid using mastercard', () => {
		expect(order.paymentType instanceof MasterCard).toEqual(true);
	});

	it('should have an Order commission of 4', () => {
		expect(order.commission).toEqual(4);
	});
});

describe('Order using PayPal', () => {
	beforeEach(() => {
		order = new Order(PaymentType.PayPal, 100);
	});

	it('should be paid using paypal', () => {
		expect(order.paymentType instanceof PayPal).toEqual(true);
	});

	it('should have an Order commission of 6', () => {
		expect(order.commission).toEqual(6);
	});
});
