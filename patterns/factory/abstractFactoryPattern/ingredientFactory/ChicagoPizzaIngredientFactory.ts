import PizzaIngredientFactory from "./PizzaIngredientFactory";

import { ThickCrustDough } from "../ingredient/dough";
import { PlumTomatoSauce } from "../ingredient/sauce";
import { MozzarellaCheese } from "../ingredient/cheese";
import { BlackOlives, Spinach, Eggplant } from "../ingredient/veggies";
import { SlicedPepperoni } from "../ingredient/pepperoni";
import { FrozenClams } from "../ingredient/clams";

import { PIZZA_STYLE } from "../../index.meta";

class ChicagoPizzaIngredientFactory implements PizzaIngredientFactory {
  // ConcreteFactory_1

  get style() {
    return PIZZA_STYLE.CHICAGO;
  }

  createDough() {
    return new ThickCrustDough(); // ConcreateProduct
  }

  createSauce() {
    return new PlumTomatoSauce(); // ConcreateProduct
  }

  createCheese() {
    return new MozzarellaCheese(); // ConcreateProduct
  }

  createVeggies() {
    return [new BlackOlives(), new Spinach(), new Eggplant()]; // [ConcreateProduct]
  }

  createPepperoni() {
    return new SlicedPepperoni(); // ConcreateProduct
  }

  createClam() {
    return new FrozenClams(); // ConcreateProduct
  }
}

export default ChicagoPizzaIngredientFactory;
