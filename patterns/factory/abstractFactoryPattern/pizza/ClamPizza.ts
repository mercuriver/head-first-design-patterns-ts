import Pizza from "./Pizza";
import PizzaIngredientFactory from "../ingredientFactory/PizzaIngredientFactory";

class ClamPizza extends Pizza {
  #ingredientFactory;

  public ClamPizza(ingredientFactory: PizzaIngredientFactory) {
    this.#ingredientFactory = ingredientFactory;
  }

  prepare() {
    console.log("Preparing " + this.name);
    this.dough = this.#ingredientFactory.createDough();
    this.sauce = this.#ingredientFactory.createSauce();
    this.cheese = this.#ingredientFactory.createCheese();
    this.clam = this.#ingredientFactory.createClam();
    console.log(this.toString());
  }
}

export default ClamPizza;
