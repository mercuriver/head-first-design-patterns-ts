import Duck from "./Duck";
import { announceMessages } from "../index.meta";

import { FlyWithWings } from "../FlyBehavior";
import { Quack } from "../QuackBehavior";

class MallardDuck extends Duck {
  constructor() {
    super({ fly: new FlyWithWings(), quack: new Quack() });
  }

  display(): string {
    return announceMessages.mallard;
  }
}

export default MallardDuck;
