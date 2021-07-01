/*
 * Establecemos el contrato público de las bebidas, las cuales podrán ser "decoradas"
 */
export interface Beverage {
	getDescription(): string;
	cost(): number;
}

/*
 * Establecemos el contrato público de los condimentos (los decoradores).
 * Fíjate que ésta clase implementa la interfaz de bebida.
 * Usamos una clase abstracta ya que una interfaz no nos permite indicar la propiedad protected.
 */
export abstract class CondimentDecorator implements Beverage {
	protected beverage: Beverage;

	constructor(beverage: Beverage) {
		this.beverage = beverage;
	}

	getDescription(): string {
		return this.beverage.getDescription();
	}

	cost(): number {
		return this.beverage.cost();
	}
}