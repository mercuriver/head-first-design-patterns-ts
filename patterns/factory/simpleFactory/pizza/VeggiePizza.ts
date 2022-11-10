import Pizza from "./Pizza";

class VeggiePizza extends Pizza {
  constructor() {
    super();
    this.name = "Veggie Pizza";
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
