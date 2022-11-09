import PizzaIngredientFactory from "./PizzaIngredientFactory";

import { ThinCrustDough } from "../ingredient/dough";
import { MarinaraSauce } from "../ingredient/sauce";
import { ReggianoCheese } from "../ingredient/cheese";
import { Garlic, Onion, Mushroom, RedPepper } from "../ingredient/veggies";
import { SlicedPepperoni } from "../ingredient/pepperoni";
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

  createVeggies() {
    return [new Garlic(), new Onion(), new Mushroom(), new RedPepper()];
  }

  createPepperoni() {
    return new SlicedPepperoni();
  }

  createClam() {
    return new FreshClams();
  }
}

export default NYPizzaIngredientFactory;
