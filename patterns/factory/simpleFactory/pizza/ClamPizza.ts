import Pizza from "./Pizza";
import { pizzaName, PIZZA_TYPE } from "../index.meta";

class ClamPizza extends Pizza {
  constructor() {
    super();
    this.name = pizzaName[PIZZA_TYPE.CLAM];
    this.dough = "Thin Crust";
    this.sauce = "White garlic sauce";
    this.toppings = ["Clams", "Grated parmesan cheese"];
  }
}

export default ClamPizza;
