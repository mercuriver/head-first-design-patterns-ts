abstract class Beverage {
  #description: string;

  abstract cost(): number;

  get description(): string {
    return this.#description;
  }
}

export default Beverage;
