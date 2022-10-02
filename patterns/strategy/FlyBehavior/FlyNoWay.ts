import FlyBehavior from ".";
import { flyMessages } from "../index.meta";

class FlyNoWay implements FlyBehavior {
  fly(): string {
    return flyMessages.fly_no_way;
  }
}

export default FlyNoWay;
