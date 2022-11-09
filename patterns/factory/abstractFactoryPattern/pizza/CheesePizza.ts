import Pizza from "./Pizza";
import PizzaIngredientFactory from "../ingredientFactory/PizzaIngredientFactory";

class CheesePizza extends Pizza {
  #ingredientFactory;

  constructor(ingredientFactory: PizzaIngredientFactory) {
    super();
    this.#ingredientFactory = ingredientFactory;
  }

  prepare() {
    console.log(`\n준비 중: ${this.name}`);
    this.dough = this.#ingredientFactory.createDough();
    this.sauce = this.#ingredientFactory.createSauce();
    this.cheese = this.#ingredientFactory.createCheese();
    console.log(this.toString());
  }
}

export default CheesePizza;
