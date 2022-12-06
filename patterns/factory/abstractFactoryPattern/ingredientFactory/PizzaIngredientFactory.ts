import Dough from "../ingredient/dough/Dough";
import Sauce from "../ingredient/sauce/Sauce";
import Cheese from "../ingredient/cheese/Cheese";
import Clams from "../ingredient/clams/Clams";
import Veggies from "../ingredient/veggies/Veggies";
import Pepperoni from "../ingredient/Pepperoni/Pepperoni";

interface PizzaIngredientFactory {
  // ConcreateProduct

  createDough(): Dough; // AbstractProduct_1
  createSauce(): Sauce; // AbstractProduct_2
  createCheese(): Cheese; // AbstractProduct_3
  createVeggies(): Veggies[]; // AbstractProduct_4
  createPepperoni(): Pepperoni; // AbstractProduct_5
  createClam(): Clams; // AbstractProduct_6
}

export default PizzaIngredientFactory;
