import Pizza from "./Pizza";

class PepperoniPizza extends Pizza {
  constructor() {
    super();
    this.name = "Pepperoni Pizza";
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
