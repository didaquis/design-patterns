import EnemyDecorator from '../EnemyDecorator';

export class HelmetDecorator extends EnemyDecorator {
	takeDamage(): number {
		return this.enemy.takeDamage() / 2;
	}
}
