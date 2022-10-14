import BeverageDecorator from "./BeverageDecorator";
import { COST } from "../index.meta";

class DarkRoast extends BeverageDecorator {
  #description = "다크 로스트";
  get cost(): number {
    return super.cost + COST.DARK_ROAST;
  }

  get description(): string {
    return `${super.description}${this.#description}`;
  }
}

export default DarkRoast;
