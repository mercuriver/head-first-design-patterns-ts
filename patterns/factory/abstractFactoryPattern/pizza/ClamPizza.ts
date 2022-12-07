import Pizza from "./Pizza";
import PizzaIngredientFactory from "../ingredientFactory/PizzaIngredientFactory";

import { PIZZA_TYPE, pizzaStyleName, pizzaTypeName } from "../../index.meta";

class ClamPizza extends Pizza {
  #ingredientFactory;

  constructor(ingredientFactory: PizzaIngredientFactory) {
    super();
    this.#ingredientFactory = ingredientFactory;
    this.name = `${pizzaStyleName[this.#ingredientFactory.style]} ${
      pizzaTypeName[this.#ingredientFactory.style][PIZZA_TYPE.CLAM]
    }`;
  }

  prepare() {
    console.log(`${this.name} 재료 준비 중`);
    this.dough = this.#ingredientFactory.createDough();
    this.sauce = this.#ingredientFactory.createSauce();
    this.cheese = this.#ingredientFactory.createCheese();
    this.clam = this.#ingredientFactory.createClam();
    console.log(this.toString());
  }
}

export default ClamPizza;
