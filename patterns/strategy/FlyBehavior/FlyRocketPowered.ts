import FlyBehavior from ".";
import { flyMessages } from "../index.meta";

class FlyRocketPowered implements FlyBehavior {
  fly(): string {
    return flyMessages.fly_rocket_pewered;
  }
}

export default FlyRocketPowered;
