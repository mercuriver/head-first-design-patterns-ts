import Pizza from "./Pizza";
import PizzaIngredientFactory from "../ingredientFactory/PizzaIngredientFactory";

class VeggiePizza extends Pizza {
  #ingredientFactory;

  constructor(ingredientFactory: PizzaIngredientFactory) {
    super();
    this.#ingredientFactory = ingredientFactory;
  }

  prepare() {
    console.log(`${this.name} 재료 준비 중`);
    this.dough = this.#ingredientFactory.createDough();
    this.sauce = this.#ingredientFactory.createSauce();
    this.cheese = this.#ingredientFactory.createCheese();
    this.veggies = this.#ingredientFactory.createVeggies();
    console.log(this.toString());
  }
}

export default VeggiePizza;
