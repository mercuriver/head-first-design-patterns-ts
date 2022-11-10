abstract class Pizza {
  #name: string;
  #dough: string;
  #sauce: string;
  #toppings: string[];

  prepare() {
    console.log(`\nPreparing ${this.name}`);
  }

  bake() {
    console.log(`Baking ${this.name}`);
  }

  cut() {
    console.log(`Cutting ${this.name}`);
  }

  box() {
    console.log(`Boxing ${this.name}`);
  }

  get name(): string {
    return this.#name;
  }
  set name(value: string) {
    this.#name = value;
  }
  set dough(value: string) {
    this.#dough = value;
  }
  set sauce(value: string) {
    this.#sauce = value;
  }
  set toppings(value: string[]) {
    this.#toppings = value;
  }

  toString() {
    const ingredient: string[] = [];

    ingredient.push(this.#dough);
    ingredient.push(this.#sauce);
    ingredient.push(this.#toppings.join(", "));

    return `\n구성 요소:\n${ingredient.join("\n")}`;
  }
}

export default Pizza;
