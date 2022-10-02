import Duck from "./Duck";
import { announceMessages } from "../index.meta";

import { FlyNoWay } from "../FlyBehavior";
import { Squeak } from "../QuackBehavior";

class ModelDuck extends Duck {
  constructor() {
    super({ fly: new FlyNoWay(), quack: new Squeak() });
  }

  display(): string {
    return announceMessages.model;
  }
}

export default ModelDuck;
