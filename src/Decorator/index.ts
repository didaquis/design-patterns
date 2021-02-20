/**
 * Decorator.
 *
 * Decorator es un patrón de diseño estructural que te permite añadir funcionalidades a objetos colocando estos objetos dentro de objetos encapsuladores especiales que contienen estas funcionalidades.
 *
 * Útil para añadir capas de comportamiento a objetos como si fueran las capas de una cebolla. Es decir, nos permite extender el comportamiento de manera dinámica. En este ejemplo, podemos aplicar diferentes decoradores (protecciones) a diferentes entidades (enemigos) para calcular el daño que recibirían al sufrir un ataque. Cada decorador implementar un comportamiento que se aplica junto al resto de decoradores.
 *
 * Ten en cuenta que el orden en que se aplican los decoradores afecta al resultado. Los decoradores se resolverán en orden inverso. Es decir, el ultimo decorador aplicado es el primero que se va a ejecutar.
 */

import BaseBasicEnemy from './baseClasses/BaseBasicEnemy';
import BaseBossEnemy from './baseClasses/BaseBossEnemy';
import { HelmetDecorator } from './decorators/HelmetDecorator';
import { ArmourDecorator } from './decorators/ArmourDecorator';

// En este ejemplo vamos a aplicar unos decorados a "BaseBasicEnemy" y luego calcularemos el daño que recibiría este enemigo en función de los decoradores aplicados.
// Primero instanciamos al enemigo.
const basicEnemy = new BaseBasicEnemy();

// Ahora aplicamos dos decoradores.
const basicEnemyWithHelmet = new HelmetDecorator(basicEnemy);
const basicEnemyWithHelmetAndArmour = new ArmourDecorator(basicEnemyWithHelmet);

// Finalmente queremos calcular el daño.
basicEnemyWithHelmetAndArmour.takeDamage(); // 1.6666666666666667

/**
 * Extra:
 * Una cosa interesante de los decoradores, es que podemos aprovecharlos para todas las clases que implementen la interfaz de enemigo. Ahora veamos un ejemplo aplicando los mismos decoradores a la clase "BaseBossEnemy".
 */

const bossEnemy = new BaseBossEnemy();
const bossEnemyWithHelmet = new HelmetDecorator(bossEnemy);
const bossEnemyWithHelmetAndArmour = new ArmourDecorator(bossEnemyWithHelmet);

bossEnemyWithHelmetAndArmour.takeDamage(); // 0.3333333333333333
// Como ves, podríamos tener un conjunto de entidades y un conjunto de decoradores. Esto permitiría poder aplicar cualquier números de decoradores (inlcuso ninguno) a cada uno de esos entidades para alterar su comportamiento.
