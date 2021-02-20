import { EnemyInterface } from './EnemyInterface';

export default abstract class EnemyDecorator implements EnemyInterface {
	// Esta clase es la base de todos los decoradores. Fijate que la propiedad enemy es protected y por tanto será accesible en aquellas clases que extiendan de esta.
	protected enemy: EnemyInterface;

	constructor(enemy: EnemyInterface) {
		this.enemy = enemy;
	}

	takeDamage(): number {
		return this.enemy.takeDamage();
	}
}
