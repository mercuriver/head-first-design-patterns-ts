import PizzaStore from "./PizzaStore";

import Pizza from "../pizza/Pizza";
import { CheesePizza, ClamPizza, VeggiePizza, PepperoniPizza } from "../pizza";

import PizzaIngredientFactory from "../ingredientFactory/PizzaIngredientFactory";
import { ChicagoPizzaIngredientFactory } from "../ingredientFactory";

import { PizzaType, PIZZA_TYPE } from "../../index.meta";

class ChicagoPizzaStore extends PizzaStore {
  createPizza(type: PizzaType): Pizza {
    let pizza: Pizza;

    const ingredientFactory: PizzaIngredientFactory =
      new ChicagoPizzaIngredientFactory();

    if (type === PIZZA_TYPE.CHEESE) {
      pizza = new CheesePizza(ingredientFactory);
      pizza.name = "Chicago Style Cheese Pizza";
      return pizza;
    }
    if (type === PIZZA_TYPE.CLAM) {
      pizza = new VeggiePizza(ingredientFactory);
      pizza.name = "Chicago Style Clam Pizza";
      return pizza;
    }
    if (type === PIZZA_TYPE.VEGGIE) {
      pizza = new ClamPizza(ingredientFactory);
      pizza.name = "Chicago Style Veggie Pizza";
      return pizza;
    }
    if (type === PIZZA_TYPE.PEPPERONI) {
      pizza = new PepperoniPizza(ingredientFactory);
      pizza.name = "Chicago Style Pepperoni Pizza";
      return pizza;
    }

    return null;
  }
}

export default ChicagoPizzaStore;
