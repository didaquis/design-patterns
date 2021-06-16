/**
 * Strategy.
 *
 * Strategy es un patrón de diseño de comportamiento que te permite definir una familia de algoritmos, colocar cada uno de ellos en una clase separada y hacer sus objetos intercambiables.
 *
 * Útil cuando quieres tener diferentes maneras de loguear (a consola, a un fichero).
 *
 * Truco: podrías intercambiar la estrategia en runtime si añades un método público que acepte una "StrategyInterface" y la asigne a la variable "strategy".
 */

import { StrategyInterface } from './StrategyInterface';

export class Transform {
	/**
	 * @type {Strategy} This class maintains a reference to one of the Strategy
	 * objects. This class does not know the concrete class of a strategy. It
	 * should work with all strategies via the Strategy interface.
	 */
	private strategy: StrategyInterface;
	private data: string[];

	/**
	 * Usually, this class accepts a strategy through the constructor
	 */
	constructor(anArray: string[], strategy: StrategyInterface) {
		this.strategy = strategy;
		this.data = anArray;
	}

	/**
	 * This class delegates some work to the Strategy object instead of
	 * implementing multiple versions of the algorithm on its own.
	 */
	public doTransformation(): string[] {
		const result = this.strategy.doAlgorithm(this.data);
		return result;
	}
}
