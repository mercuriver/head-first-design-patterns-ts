import BeverageDecorator from "./BeverageDecorator";
import { COST } from "../index.meta";

class Milk extends BeverageDecorator {
  #description = "우유";
  get cost(): number {
    return super.cost + COST.MILK;
  }

  get description(): string {
    return `${super.description}${this.#description}`;
  }
}

export default Milk;
