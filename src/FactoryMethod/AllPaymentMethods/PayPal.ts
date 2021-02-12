/**
 * El método de pago debe cumplir la interfaz
 */
import PaymentMethodInterface from '../Factory/PaymentMethodInterface';

export default class PayPal implements PaymentMethodInterface {
	get comission(): number {
		return 0.06;
	}
}
