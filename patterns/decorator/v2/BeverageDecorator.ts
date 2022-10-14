class BeverageDecorator {
  #beverage: BeverageDecorator;

  constructor(beverage?: BeverageDecorator) {
    this.#beverage = beverage;
  }

  get cost(): number {
    return this.#beverage ? this.#beverage.cost : 0;
  }

  get description(): string {
    return this.#beverage ? `${this.#beverage.description} ` : "";
  }
}

export default BeverageDecorator;
