import Pizza from "./Pizza";
import { pizzaName, PIZZA_TYPE } from "../index.meta";

class PepperoniPizza extends Pizza {
  constructor() {
    super();
    this.name = pizzaName[PIZZA_TYPE.PEPPERONI];
    this.dough = "Crust";
    this.sauce = "Marinara sauce";
    this.toppings = [
      "Sliced Pepperoni",
      "Sliced Onion",
      "Grated parmesan cheese",
    ];
  }
}

export default PepperoniPizza;
