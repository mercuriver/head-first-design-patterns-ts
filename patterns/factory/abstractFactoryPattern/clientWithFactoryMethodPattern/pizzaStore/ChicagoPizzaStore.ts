import PizzaStore from "./PizzaStore";

import Pizza from "../pizza/Pizza";
import { CheesePizza, ClamPizza, VeggiePizza, PepperoniPizza } from "../pizza";

import PizzaIngredientFactory from "../../ingredientFactory/PizzaIngredientFactory";
import { ChicagoPizzaIngredientFactory } from "../../ingredientFactory";

import {
  type PizzaType,
  PIZZA_STYLE,
  PIZZA_TYPE,
  pizzaStyleName,
  pizzaTypeName,
} from "../../../index.meta";

class ChicagoPizzaStore extends PizzaStore {
  createPizza(type: PizzaType): Pizza {
    let pizza: Pizza;

    const ingredientFactory: PizzaIngredientFactory =
      new ChicagoPizzaIngredientFactory();

    if (type === PIZZA_TYPE.CHEESE) {
      pizza = new CheesePizza(ingredientFactory);
      pizza.name = `${pizzaStyleName[PIZZA_STYLE.CHICAGO]} ${
        pizzaTypeName[PIZZA_STYLE.CHICAGO][PIZZA_TYPE.CHEESE]
      }`;
      return pizza;
    }
    if (type === PIZZA_TYPE.CLAM) {
      pizza = new VeggiePizza(ingredientFactory);
      pizza.name = `${pizzaStyleName[PIZZA_STYLE.CHICAGO]} ${
        pizzaTypeName[PIZZA_STYLE.CHICAGO][PIZZA_TYPE.CLAM]
      }`;
      return pizza;
    }
    if (type === PIZZA_TYPE.VEGGIE) {
      pizza = new ClamPizza(ingredientFactory);
      pizza.name = `${pizzaStyleName[PIZZA_STYLE.CHICAGO]} ${
        pizzaTypeName[PIZZA_STYLE.CHICAGO][PIZZA_TYPE.VEGGIE]
      }`;
      return pizza;
    }
    if (type === PIZZA_TYPE.PEPPERONI) {
      pizza = new PepperoniPizza(ingredientFactory);
      pizza.name = `${pizzaStyleName[PIZZA_STYLE.CHICAGO]} ${
        pizzaTypeName[PIZZA_STYLE.CHICAGO][PIZZA_TYPE.PEPPERONI]
      }`;
      return pizza;
    }

    return null;
  }
}

export default ChicagoPizzaStore;
