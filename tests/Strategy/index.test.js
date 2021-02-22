import { Transform } from '../../src/Strategy/index.ts';
import { ReverseStrategy } from '../../src/Strategy/strategies/ReverseStrategy';
import { SortStrategy } from '../../src/Strategy/strategies/SortStrategy';

describe('Strategy', () => {
	it('Transform class should do a transformation using reverse algorithm', () => {
		const myArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
		const expectedResult = ['g', 'f', 'e', 'd', 'c', 'b', 'a'];

		const transform = new Transform(myArray, new ReverseStrategy());

		expect(transform.doTransformation()).toEqual(expectedResult);
	});

	it('Transform class should do a transformation using sort algorithm', () => {
		const myArray = ['b', 'c', 'a', 'd', 'g', 'e', 'f'];
		const expectedResult = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

		const transform = new Transform(myArray, new SortStrategy());

		expect(transform.doTransformation()).toEqual(expectedResult);
	});
});
