/**
 * Factory Method.
 *
 * Factory Method es un patrón de diseño creacional que proporciona una interfaz para crear objetos en una superclase (la factoría) mientras que permite a las subclases (en este ejemplo, los métodos de pago) tener distinto comportamientos (Fíjate que retornan diferente comisión).
 */

import PaymentType from './AllPaymentMethods/types';
import PaymentMethodInterface from './Factory/PaymentMethodInterface';
import PaymentMethodFactory from './Factory/PaymentMethodFactory';

export default class Order {
	public paymentType: PaymentMethodInterface;
	private commissionApplied = 0;

	constructor(private type: PaymentType, public amount: number) {
		// Establece el tipo de pago (Obtenemos la clase mediante inyección de dependencia)
		this.paymentType = PaymentMethodFactory.getInstanceOfPaymentType(this.type);

		this.calculateCommission();
	}

	private calculateCommission(): void {
		// Dado que todos los métodos de pago implementan la misma interfaz, podemos hacer este tipo de lógica sin saber que método de pago se va a utilizar. Todos los métodos de pago nos retornan un valor de comissión.
		this.commissionApplied = this.paymentType.comission * this.amount;
	}

	public get commission(): number {
		return this.commissionApplied;
	}
}
