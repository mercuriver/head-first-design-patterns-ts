interface BeverageDecoratorClass {
  new (beverage: BeverageDecorator): BeverageDecorator;
}

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

  add(beverageDecorator: BeverageDecoratorClass) {
    return new beverageDecorator(this);
  }
}

export default BeverageDecorator;
