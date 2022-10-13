import CondimentDecorator from "../core/CondimentDecorator";
import { COST } from "../index.meta";

class Milk extends CondimentDecorator {
  // Todo: 전달 받은 음료 cost 합산

  cost(): number {
    return COST.MILK;
  }
}

export default Milk;
