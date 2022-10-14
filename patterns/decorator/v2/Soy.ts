import BeverageDecorator from "./BeverageDecorator";
import { COST } from "../index.meta";

class Soy extends BeverageDecorator {
  #description = "두유";
  get cost(): number {
    return super.cost + COST.SOY;
  }

  get description(): string {
    return `${super.description}${this.#description}`;
  }
}

export default Soy;
