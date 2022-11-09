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
    console.log(`\n준비 중: ${this.#name}`);
    console.log(`${this.#dough} 를 돌리는 중...`);
    console.log(`${this.#sauce}를 뿌리는 중...`);
    console.log(`토핑를 올리는 중...\n    ${this.#toppings.join("\n    ")}\n`);
  }
  bake(): void {
    console.log("175도에서 25분 간 굽기");
  }
  cut(): void {
    console.log("피자를 사선으로 자르기");
  }
  box(): void {
    console.log("상자에 피자 담기");
  }

  get name(): string {
    return this.#name;
  }
}

export { PizzaProps };
export default Pizza;
