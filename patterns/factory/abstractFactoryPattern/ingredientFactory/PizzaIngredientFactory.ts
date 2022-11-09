import type { Dough } from "../ingredient/dough";
import type { Sauce } from "../ingredient/sauce";
import type { Cheese } from "../ingredient/cheese";
import type { Clams } from "../ingredient/clams";

interface PizzaIngredientFactory {
  createDough(): Dough;
  createSauce(): Sauce;
  createCheese(): Cheese;
  // Veggies[] createVeggies();
  // Pepperoni createPepperoni();
  createClam(): Clams;
}

export default PizzaIngredientFactory;
