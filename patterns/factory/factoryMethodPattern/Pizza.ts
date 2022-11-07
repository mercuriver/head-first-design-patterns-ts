type PizzaProps = {
  name: string;
  dough: string;
  sauce: string;
  toppings: Array<string>;
};

abstract class Pizza {
  #name: PizzaProps["name"];
  #dough: PizzaProps["dough"];
  #sauce: PizzaProps["sauce"];
  #toppings: PizzaProps["toppings"];

  constructor({ name, dough, sauce, toppings }: PizzaProps) {
    this.#name = name;
    this.#dough = dough;
    this.#sauce = sauce;
    this.#toppings = toppings;
  }

  prepare(): void {
    console.log(`준비 중: ${this.#name}`);
    console.log("도우를 돌리는 중...");
    console.log("소스를 뿌리는 중...");
    console.log("토핑를 올리는 중...");
    console.log(this.#toppings.join("   "));
  }

  bake(): void {}
  cut(): void {}
  box(): void {}

  get name(): string {
    return this.#name;
  }
}

export { PizzaProps };
export default Pizza;
