import Beverage from "../core/Beverage";
import { COST } from "../index.meta";

class HouseBlend extends Beverage {
  // Todo: 전달 받은 음료 cost 합산

  cost(): number {
    return COST.HOUSE_BLEND;
  }
}

export default HouseBlend;
