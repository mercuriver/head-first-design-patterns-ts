import PizzaStore from "./PizzaStore";

import Pizza from "../pizza/Pizza";
import { CheesePizza, ClamPizza, VeggiePizza, PepperoniPizza } from "../pizza";

import PizzaIngredientFactory from "../ingredientFactory/PizzaIngredientFactory";
import { NYPizzaIngredientFactory } from "../ingredientFactory";

import {
  type PizzaType,
  PIZZA_STYLE,
  PIZZA_TYPE,
  pizzaStyleName,
  pizzaTypeName,
} from "../../index.meta";

class NYPizzaStore extends PizzaStore {
  createPizza(type: PizzaType): Pizza {
    let pizza: Pizza;

    const ingredientFactory: PizzaIngredientFactory =
      new NYPizzaIngredientFactory();

    if (type === PIZZA_TYPE.CHEESE) {
      pizza = new CheesePizza(ingredientFactory);
      pizza.name = `${pizzaStyleName[PIZZA_STYLE.NEW_YORK]} ${
        pizzaTypeName[PIZZA_STYLE.NEW_YORK][PIZZA_TYPE.CHEESE]
      }`;
      return pizza;
    }
    if (type === PIZZA_TYPE.CLAM) {
      pizza = new VeggiePizza(ingredientFactory);
      pizza.name = `${pizzaStyleName[PIZZA_STYLE.NEW_YORK]} ${
        pizzaTypeName[PIZZA_STYLE.NEW_YORK][PIZZA_TYPE.CLAM]
      }`;
      return pizza;
    }
    if (type === PIZZA_TYPE.VEGGIE) {
      pizza = new ClamPizza(ingredientFactory);
      pizza.name = `${pizzaStyleName[PIZZA_STYLE.NEW_YORK]} ${
        pizzaTypeName[PIZZA_STYLE.NEW_YORK][PIZZA_TYPE.VEGGIE]
      }`;
      return pizza;
    }
    if (type === PIZZA_TYPE.PEPPERONI) {
      pizza = new PepperoniPizza(ingredientFactory);
      pizza.name = `${pizzaStyleName[PIZZA_STYLE.NEW_YORK]} ${
        pizzaTypeName[PIZZA_STYLE.NEW_YORK][PIZZA_TYPE.PEPPERONI]
      }`;
      return pizza;
    }

    return null;
  }
}

export default NYPizzaStore;
