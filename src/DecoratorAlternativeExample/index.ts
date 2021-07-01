import { Beverage, CondimentDecorator } from './types';

/*
 * Creamos un tipo de Beverage, en este ejemplo un café expresso
 */
class Expresso implements Beverage {
	private description = 'Expresso';

	getDescription() {
		return this.description;
	}

	cost() {
		return 1.99;
	}
}

/*
 * Creamos una clase de tipo condimento (un decorador)
 */
class Sugar extends CondimentDecorator {
	getDescription() {
		return `${this.beverage.getDescription()}, sugar`;
	}

	cost() {
		return this.beverage.cost() + 0.15;
	}
}

/*
 * Creamos una clase de tipo condimento (un decorador)
 */
class Milk extends CondimentDecorator {
	getDescription() {
		return `${this.beverage.getDescription()}, milk`;
	}

	cost() {
		return this.beverage.cost() + 0.25;
	}
}

/*
 * Veamos el resultado! Vamos a crear un café y lo vamos a "decorar" con condimentos:
 */
const coffee = new Expresso();
coffee.getDescription(); // 'Expresso'
coffee.cost(); // 1.99

const coffeeWithSugar = new Sugar(coffee);
coffeeWithSugar.getDescription(); // 'Expresso, sugar'
coffeeWithSugar.cost(); // 2.14

const coffeeWithMilk = new Milk(coffee);
coffeeWithMilk.getDescription(); // 'Expresso, milk'
coffeeWithMilk.cost(); // 2.24

const coffeeWithMilkAndSugar = new Sugar(new Milk(coffee));
coffeeWithMilkAndSugar.getDescription(); // 'Expresso, sugar, milk'
coffeeWithMilkAndSugar.cost(); // 2.39
