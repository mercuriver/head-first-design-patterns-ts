import QuackBehavior from ".";
import { quackMessages } from "../index.meta";

class Quack implements QuackBehavior {
  public quack(): string {
    return quackMessages.quack;
  }
}

export default Quack;
