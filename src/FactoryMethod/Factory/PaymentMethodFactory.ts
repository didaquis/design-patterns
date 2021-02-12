import PaymentType from '../AllPaymentMethods/types';
import PaymentMethodInterface from './PaymentMethodInterface';
import MasterCard from '../AllPaymentMethods/MasterCard';
import PayPal from '../AllPaymentMethods/PayPal';

export default class PaymentMethodFactory {
	public static getInstanceOfPaymentType(type: PaymentType): PaymentMethodInterface {
		// En la factoría extendemos nuestro código para retornar un método de pago u otro según nos interese.
		// Al colocar esta lógica aquí, nos aseguramos que es el único punto que tendremos que mantener cuando se añada o quite otro método de pago

		if (type === PaymentType.Mastercard) {
			return new MasterCard();
		}

		if (type === PaymentType.PayPal) {
			return new PayPal();
		}

		throw new Error('Invalid payment method.'); // Útil para gestionar el mal uso de la factoría
	}
}
