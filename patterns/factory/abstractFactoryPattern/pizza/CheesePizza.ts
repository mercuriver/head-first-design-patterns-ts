import Pizza from "./Pizza";
import PizzaIngredientFactory from "../ingredientFactory/PizzaIngredientFactory";

class CheesePizza extends Pizza {
  #ingredientFactory;

  public CheesePizza(ingredientFactory: PizzaIngredientFactory) {
    this.#ingredientFactory = ingredientFactory;
  }

  prepare() {
    console.log("Preparing " + this.name);
    this.dough = this.#ingredientFactory.createDough();
    this.sauce = this.#ingredientFactory.createSauce();
    this.cheese = this.#ingredientFactory.createCheese();
    console.log(this.toString());
  }
}

export default CheesePizza;
