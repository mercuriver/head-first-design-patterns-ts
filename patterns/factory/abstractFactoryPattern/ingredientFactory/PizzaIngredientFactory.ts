import Dough from "../ingredient/dough/Dough";
import Sauce from "../ingredient/sauce/Sauce";
import Cheese from "../ingredient/cheese/Cheese";
import Clams from "../ingredient/clams/Clams";
import Veggies from "../ingredient/veggies/Veggies";
import Pepperoni from "../ingredient/Pepperoni/Pepperoni";

interface PizzaIngredientFactory {
  createDough(): Dough;
  createSauce(): Sauce;
  createCheese(): Cheese;
  createVeggies(): Veggies[];
  createPepperoni(): Pepperoni;
  createClam(): Clams;
}

export default PizzaIngredientFactory;
