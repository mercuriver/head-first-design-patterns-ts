import PizzaIngredientFactory from "./PizzaIngredientFactory";

import { ThinCrustDough } from "../ingredient/dough";
import { MarinaraSauce } from "../ingredient/sauce";
import { ReggianoCheese } from "../ingredient/cheese";
import { Garlic, Onion, Mushroom, RedPepper } from "../ingredient/veggies";
import { SlicedPepperoni } from "../ingredient/pepperoni";
import { FreshClams } from "../ingredient/clams";

class NYPizzaIngredientFactory implements PizzaIngredientFactory {
  // ConcreteFactory_1

  createDough() {
    return new ThinCrustDough(); // ConcreateProduct
  }

  createSauce() {
    return new MarinaraSauce(); // ConcreateProduct
  }

  createCheese() {
    return new ReggianoCheese(); // ConcreateProduct
  }

  createVeggies() {
    return [new Garlic(), new Onion(), new Mushroom(), new RedPepper()]; // [ConcreateProduct]
  }

  createPepperoni() {
    return new SlicedPepperoni(); // ConcreateProduct
  }

  createClam() {
    return new FreshClams(); // ConcreateProduct
  }
}

export default NYPizzaIngredientFactory;
