import FlyBehavior from ".";
import { flyMessages } from "../index.meta";

class FlyWithWings implements FlyBehavior {
  fly(): string {
    return flyMessages.fly_with_wings;
  }
}

export default FlyWithWings;
