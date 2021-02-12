/**
 * El método de pago debe cumplir la interfaz
 */
import PaymentMethodInterface from '../Factory/PaymentMethodInterface';

export default class MasterCard implements PaymentMethodInterface {
	get comission(): number {
		return 0.04;
	}
}
