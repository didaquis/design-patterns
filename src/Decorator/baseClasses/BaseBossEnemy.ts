import { EnemyInterface } from '../EnemyInterface';

export default class BaseBossEnemy implements EnemyInterface {
	takeDamage(): number {
		return 2;
	}
}
