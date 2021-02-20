import EnemyDecorator from '../EnemyDecorator';

// Los decoradores agregan comportamiento. Fíjate que extienden de la EnemyDecorator, no es necesario declarar aquí el constructor.

export class ArmourDecorator extends EnemyDecorator {
	takeDamage(): number {
		return this.enemy.takeDamage() / 4;
	}
}
