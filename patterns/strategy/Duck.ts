import defaultMessage from "../index.meta";

abstract class Duck {
  #flyBehavior: any;
  #quackBehavior: any;

  constructor() {}

  public swim(): string {
    return defaultMessage.message_swim;
  }

  public performFly(): string {
    return this.#flyBehavior.fly();
  }

  public performQuack(): string {
    return this.#quackBehavior.quack();
  }
}

export default Duck;
