import Pizza from "./Pizza";
import PizzaIngredientFactory from "../ingredientFactory/PizzaIngredientFactory";

class PepperoniPizza extends Pizza {
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

    this.veggies = this.#ingredientFactory.createVeggies();
    this.pepperoni = this.#ingredientFactory.createPepperoni();

    console.log(this.toString());
  }
}

export default PepperoniPizza;
