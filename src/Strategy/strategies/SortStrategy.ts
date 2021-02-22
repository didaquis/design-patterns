import { StrategyInterface } from '../StrategyInterface';

export class SortStrategy implements StrategyInterface {
	public doAlgorithm(data: string[]): string[] {
		return [...data.sort()];
	}
}
