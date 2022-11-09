import PizzaStore from "./PizzaStore";

import Pizza from "../pizza/Pizza";
import { CheesePizza, ClamPizza, VeggiePizza, PepperoniPizza } from "../pizza";

import PizzaIngredientFactory from "../ingredientFactory/PizzaIngredientFactory";
import { NYPizzaIngredientFactory } from "../ingredientFactory";

import { PizzaType, PIZZA_TYPE } from "../../index.meta";

class NYPizzaStore extends PizzaStore {
  createPizza(type: PizzaType): Pizza {
    let pizza: Pizza;

    const ingredientFactory: PizzaIngredientFactory =
      new NYPizzaIngredientFactory();

    if (type === PIZZA_TYPE.CHEESE) {
      pizza = new CheesePizza(ingredientFactory);
      pizza.name = "New York Style Cheese Pizza";
      return pizza;
    }
    if (type === PIZZA_TYPE.CLAM) {
      pizza = new VeggiePizza(ingredientFactory);
      pizza.name = "New York Style Clam Pizza";
      return pizza;
    }
    if (type === PIZZA_TYPE.VEGGIE) {
      pizza = new ClamPizza(ingredientFactory);
      pizza.name = "New York Style Veggie Pizza";
      return pizza;
    }
    if (type === PIZZA_TYPE.PEPPERONI) {
      pizza = new PepperoniPizza(ingredientFactory);
      pizza.name = "New York Style Pepperoni Pizza";
      return pizza;
    }

    return null;
  }
}

export default NYPizzaStore;
