import PizzaIngredientFactory from "./PizzaIngredientFactory";

import { ThinCrustDough } from "../ingredient/dough";
import { MarinaraSauce } from "../ingredient/sauce";
import { ReggianoCheese } from "../ingredient/cheese";
import { FreshClams } from "../ingredient/clams";

class NYPizzaIngredientFactory implements PizzaIngredientFactory {
  createDough() {
    return new ThinCrustDough();
  }

  createSauce() {
    return new MarinaraSauce();
  }

  createCheese() {
    return new ReggianoCheese();
  }

  // createVeggies() {
  // 	Veggies veggies[] = { new Garlic(), new Onion(), new Mushroom(), new RedPepper() };
  // 	return veggies;
  // }

  // createPepperoni() {
  // 	return new SlicedPepperoni();
  // }

  createClam() {
    return new FreshClams();
  }
}

export default NYPizzaIngredientFactory;
