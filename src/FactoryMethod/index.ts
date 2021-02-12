/**
 * Factory Method.
 *
 * Factory Method es un patrón de diseño creacional que proporciona una interfaz para crear objetos en una superclase (la factoría) mientras que permite a las subclases (en este ejemplo, los métodos de pago) tener distinto comportamientos (Fíjate que retornan diferente comisión).
 */

import PaymentType from './AllPaymentMethods/types';
import PaymentMethodInterface from './Factory/PaymentMethodInterface';
import PaymentMethodFactory from './Factory/PaymentMethodFactory';

export default class Order {
	public paymentType?: PaymentMethodInterface;
	public commission = 0;

	constructor(private type: PaymentType, public amount: number) {}

	public create(): void {
		// set payment type
		this.paymentType = PaymentMethodFactory.getInstanceOfPaymentType(this.type);

		// calculate commission
		this.commission = this.paymentType.comission * this.amount;
	}
}
