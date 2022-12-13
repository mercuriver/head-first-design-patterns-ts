import BeverageDecorator from "./BeverageDecorator";

const BeverageGenerator = (description: string, cost: number) =>
  class extends BeverageDecorator {
    #description = description;
    get cost(): number {
      return super.cost + cost;
    }

    get description(): string {
      return `${super.description}${this.#description}`;
    }
  };

export default BeverageGenerator;
