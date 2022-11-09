import PizzaIngredientFactory from "./PizzaIngredientFactory";

import { ThickCrustDough } from "../ingredient/dough";
import { PlumTomatoSauce } from "../ingredient/sauce";
import { MozzarellaCheese } from "../ingredient/cheese";
import { FrozenClams } from "../ingredient/clams";

class ChicagoPizzaIngredientFactory implements PizzaIngredientFactory {
  createDough() {
    return new ThickCrustDough();
  }

  createSauce() {
    return new PlumTomatoSauce();
  }

  createCheese() {
    return new MozzarellaCheese();
  }

  // createVeggies() {
  // 	Veggies veggies[] = { new BlackOlives(),
  // 	                      new Spinach(),
  // 	                      new Eggplant() };
  // 	return veggies;
  // }

  // createPepperoni() {
  // 	return new SlicedPepperoni();
  // }

  createClam() {
    return new FrozenClams();
  }
}

export default ChicagoPizzaIngredientFactory;
