/**
 * Command.
 *
 * Command es un patrón de diseño de comportamiento que convierte solicitudes u operaciones simples en objetos. Este patrón permite resolver una operación sin conocer el contenido de esta o el receptor.
 */

// import { PaymentMethodHandler } from './PaymentMethodHandler';
// import { CulquiCommand } from './paymentTypes/Culqui';
// import { CreditCardDTO } from './dto/CreditCardDTO';
// import { MercadoPagoCommand } from './paymentTypes/MercadoPago';
// import { PayUCommand } from './paymentTypes/PayU';

// const creditCard = new CreditCardDTO('marstercard', 'John Doe', 'xxxx-xxxx-xxxx-xxxx', 'xxx', 300.0);

// const paymentHandler = new PaymentMethodHandler();

// example 1 (pasamos un único proveedor de pagos):
// paymentHandler.process(new CulquiCommand(creditCard));

// example 2 (pasamos varios proveedores de pagos, se tratará de hacer el pago con el primero y pasará al siguiente si el pago no se ha podido realizar correctamente):
// paymentHandler.forceToProcess([
// 	new PayUCommand(creditCard),
// 	new MercadoPagoCommand(creditCard),
// 	new CulquiCommand(creditCard),
// ]);
