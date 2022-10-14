import CondimentDecorator from "../core/CondimentDecorator";
import { COST } from "../index.meta";

class Milk extends CondimentDecorator {
  cost(): number {
    return super.cost() + COST.MILK;
  }
}

export default Milk;
