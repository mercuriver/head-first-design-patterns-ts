import Duck from "./Duck";

import { mallardDuck } from "./index.meta";
class MallardDuck extends Duck {
  constructor() {
    super();
  }

  display(): string {
    return mallardDuck.message_display;
  }
}

export default MallardDuck;
