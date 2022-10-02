import QuackBehavior from ".";
import { quackMessages } from "../index.meta";

class Squeak implements QuackBehavior {
  public quack(): string {
    return quackMessages.squeak;
  }
}

export default Squeak;
