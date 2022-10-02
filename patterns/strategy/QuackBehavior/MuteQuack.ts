import QuackBehavior from ".";
import { quackMessages } from "../index.meta";

class MuteQuack implements QuackBehavior {
  public quack(): string {
    return quackMessages.mute_quack;
  }
}

export default MuteQuack;
