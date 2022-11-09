import type { Dough } from "../ingredient/dough";
import type { Sauce } from "../ingredient/sauce";
import type { Cheese } from "../ingredient/cheese";
import type { Clams } from "../ingredient/clams";
import type { Veggies } from "../ingredient/veggies";
import type { Pepperoni } from "../ingredient/Pepperoni";

interface PizzaIngredientFactory {
  createDough(): Dough;
  createSauce(): Sauce;
  createCheese(): Cheese;
  createVeggies(): Veggies[];
  createPepperoni(): Pepperoni;
  createClam(): Clams;
}

export default PizzaIngredientFactory;
