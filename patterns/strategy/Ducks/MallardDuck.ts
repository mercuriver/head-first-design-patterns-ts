import Duck from "./Duck";
import { announceMessages } from "../index.meta";

class MallardDuck extends Duck {
  constructor() {
    super();
  }

  display(): string {
    return announceMessages.mallard;
  }
}

export default MallardDuck;
