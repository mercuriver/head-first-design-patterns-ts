import Beverage from "../core/Beverage";
import { COST } from "../../index.meta";

class HouseBlend extends Beverage {
  cost(): number {
    return COST.HOUSE_BLEND;
  }
}

export default HouseBlend;
