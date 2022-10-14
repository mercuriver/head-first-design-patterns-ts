import BeverageDecorator from "./BeverageDecorator";
import { COST } from "../index.meta";

class HouseBlend extends BeverageDecorator {
  #description = "하우스 블랜드";
  get cost(): number {
    return super.cost + COST.HOUSE_BLEND;
  }

  get description(): string {
    return `${super.description}${this.#description}`;
  }
}

export default HouseBlend;
