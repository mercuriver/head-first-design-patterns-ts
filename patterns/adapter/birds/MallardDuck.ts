import Duck from "../interfaces/Duck";
import { duckMessages } from "../index.meta";

class MallardDuck implements Duck {
  quack(): string {
    return duckMessages.quack;
  }
  fly(): string {
    return duckMessages.fly;
  }
}

export default MallardDuck;
