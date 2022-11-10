import Pizza from "./Pizza";
import { pizzaName, PIZZA_TYPE } from "../index.meta";

class CheesePizza extends Pizza {
  constructor() {
    super();
    this.name = pizzaName[PIZZA_TYPE.CHEESE];
    this.dough = "Regular Crust";
    this.sauce = "Marinara Pizza Sauce";
    this.toppings = ["Fresh Mozzarella", "Parmesan"];
  }
}

export default CheesePizza;
