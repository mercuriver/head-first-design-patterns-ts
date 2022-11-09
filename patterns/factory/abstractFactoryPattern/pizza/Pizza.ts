import type { Dough } from "../ingredient/dough";
import type { Sauce } from "../ingredient/sauce";
import type { Cheese } from "../ingredient/cheese";
import type { Clams } from "../ingredient/clams";
import type { Veggies } from "../ingredient/veggies";
import type { Pepperoni } from "../ingredient/Pepperoni";

abstract class Pizza {
  #name: string;
  #dough: Dough;
  #sauce: Sauce;
  #veggies: Veggies[];
  #cheese: Cheese;
  #pepperoni: Pepperoni;
  #clam: Clams;

  abstract prepare();

  bake() {
    console.log("Bake for 25 minutes at 350");
  }

  cut() {
    console.log("Cutting the pizza into diagonal slices");
  }

  box() {
    console.log("Place pizza in official PizzaStore box");
  }

  get name(): string {
    return this.#name;
  }
  set name(value: string) {
    this.#name = value;
  }

  set dough(value: Dough) {
    this.#dough = value;
  }

  set sauce(value: Sauce) {
    this.#sauce = value;
  }

  set veggies(value: Veggies[]) {
    this.#veggies = value;
  }

  set cheese(value: Cheese) {
    this.#cheese = value;
  }

  set pepperoni(value: Pepperoni) {
    this.#pepperoni = value;
  }

  set clam(value: Clams) {
    this.#clam = value;
  }

  toString() {
    const ingredient: string[] = [];

    if (this.#dough) {
      ingredient.push(this.#dough.toString());
    }
    if (this.#sauce) {
      ingredient.push(this.#sauce.toString());
    }
    if (this.#cheese) {
      ingredient.push(this.#cheese.toString());
    }
    if (this.#clam) {
      ingredient.push(this.#clam.toString());
    }
    if (this.#pepperoni) {
      ingredient.push(this.#pepperoni.toString());
    }

    if (this.#veggies && this.#veggies.length > 0) {
      ingredient.push(
        this.#veggies.map((veggie) => veggie.toString()).join(", ")
      );
    }

    return `---- ${this.#name} ----\n${ingredient.join("\n")}`;
  }
}

export default Pizza;
