import defaultMessage from "../index.meta";

import FlyBehavior from "../FlyBehavior";
import QuackBehavior from "../QuackBehavior";

abstract class Duck {
  #flyBehavior: FlyBehavior;
  #quackBehavior: QuackBehavior;

  constructor() {}

  public swim(): string {
    return defaultMessage.swim;
  }

  public performFly(): string {
    return this.#flyBehavior.fly();
  }

  public performQuack(): string {
    return this.#quackBehavior.quack();
  }

  public setFlyBehavior(newBehavior: FlyBehavior): void {
    this.#flyBehavior = newBehavior;
  }

  public setQuackBehavior(newBehavior: QuackBehavior): void {
    this.#quackBehavior = newBehavior;
  }
}

export default Duck;
