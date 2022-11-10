import Pizza from "./Pizza";
import { pizzaName, PIZZA_TYPE } from "../index.meta";

class VeggiePizza extends Pizza {
  constructor() {
    super();
    this.name = pizzaName[PIZZA_TYPE.VEGGIE];
    this.dough = "Crust";
    this.sauce = "Marinara sauce";
    this.toppings = [
      "Shredded mozzarella",
      "Grated parmesan",
      "Diced onion",
      "Sliced mushrooms",
      "Sliced red pepper",
      "Sliced black olives",
    ];
  }
}

export default VeggiePizza;
