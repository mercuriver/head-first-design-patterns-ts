import defaultMessage from "../index.meta";

import FlyBehavior from "../FlyBehavior";
import QuackBehavior from "../QuackBehavior";

abstract class Duck {
  #flyBehavior: FlyBehavior;
  #quackBehavior: QuackBehavior;

  constructor({ fly, quack }: { fly: FlyBehavior; quack: QuackBehavior }) {
    this.#flyBehavior = fly;
    this.#quackBehavior = quack;
  }

  get swim(): string {
    return defaultMessage.swim;
  }

  public performFly(): string {
    return this.#flyBehavior.fly();
  }

  public performQuack(): string {
    return this.#quackBehavior.quack();
  }

  set flyBehavior(newBehavior: FlyBehavior) {
    this.#flyBehavior = newBehavior;
  }

  set quackBehavior(newBehavior: QuackBehavior) {
    this.#quackBehavior = newBehavior;
  }
}

export default Duck;
