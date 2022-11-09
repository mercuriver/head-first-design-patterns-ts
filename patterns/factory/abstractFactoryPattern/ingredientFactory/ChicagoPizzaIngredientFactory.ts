import PizzaIngredientFactory from "./PizzaIngredientFactory";

import { ThickCrustDough } from "../ingredient/dough";
import { PlumTomatoSauce } from "../ingredient/sauce";
import { MozzarellaCheese } from "../ingredient/cheese";
import { BlackOlives, Spinach, Eggplant } from "../ingredient/veggies";
import { SlicedPepperoni } from "../ingredient/pepperoni";
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

  createVeggies() {
    return [new BlackOlives(), new Spinach(), new Eggplant()];
  }

  createPepperoni() {
    return new SlicedPepperoni();
  }

  createClam() {
    return new FrozenClams();
  }
}

export default ChicagoPizzaIngredientFactory;
