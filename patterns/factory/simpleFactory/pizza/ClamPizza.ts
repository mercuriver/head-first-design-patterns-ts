import Pizza from "./Pizza";

class ClamPizza extends Pizza {
  constructor() {
    super();
    this.name = "Clam Pizza";
    this.dough = "Thin Crust";
    this.sauce = "White garlic sauce";
    this.toppings = ["Clams", "Grated parmesan cheese"];
  }
}

export default ClamPizza;
