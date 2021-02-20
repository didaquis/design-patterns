import { EnemyInterface } from '../EnemyInterface';

export default class BaseBasicEnemy implements EnemyInterface {
	takeDamage(): number {
		return 10;
	}
}
