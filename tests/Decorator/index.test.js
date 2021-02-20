import BaseBasicEnemy from '../../src/Decorator/baseClasses/BaseBasicEnemy';
import { HelmetDecorator } from '../../src/Decorator/decorators/HelmetDecorator';
import { ArmourDecorator } from '../../src/Decorator/decorators/ArmourDecorator';

describe('Decorator', () => {
	it('A basic enemy should return damage received (10)', () => {
		const basicEnemy = new BaseBasicEnemy();

		expect(basicEnemy.takeDamage()).toBe(10);
	});

	it('A basic enemy with helmet should return damage received (5)', () => {
		const basicEnemy = new BaseBasicEnemy();
		const basicEnemyWithHelmet = new HelmetDecorator(basicEnemy);

		expect(basicEnemyWithHelmet.takeDamage()).toBe(5);
	});

	it('A basic enemy with armour should return damage received (2.5)', () => {
		const basicEnemy = new BaseBasicEnemy();
		const basicEnemyWithArmour = new ArmourDecorator(basicEnemy);

		expect(basicEnemyWithArmour.takeDamage()).toBe(2.5);
	});

	it('A basic enemy with helmet and armour should return damage received (1.25)', () => {
		const basicEnemy = new BaseBasicEnemy();
		const basicEnemyWithHelmet = new HelmetDecorator(basicEnemy);
		const basicEnemyWithHelmetAndArmour = new ArmourDecorator(basicEnemyWithHelmet);

		expect(basicEnemyWithHelmetAndArmour.takeDamage()).toBe(1.25);
	});

	it('A basic enemy with armour and helmet should return damage received (1.25)', () => {
		const basicEnemy = new BaseBasicEnemy();
		const basicEnemyWithArmour = new ArmourDecorator(basicEnemy);
		const basicEnemyWithArmourAndHelmet = new HelmetDecorator(basicEnemyWithArmour);

		expect(basicEnemyWithArmourAndHelmet.takeDamage()).toBe(1.25);
	});
});
