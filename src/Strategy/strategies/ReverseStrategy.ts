import { StrategyInterface } from '../StrategyInterface';

export class ReverseStrategy implements StrategyInterface {
	public doAlgorithm(data: string[]): string[] {
		return [...data.reverse()];
	}
}
