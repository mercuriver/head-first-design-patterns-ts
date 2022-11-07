import BasePizza from "./BasePizza";

import { pizzaTypeName } from "../../../index.meta";

class VeggiePizza extends BasePizza {
  constructor() {
    super({
      name: `${pizzaTypeName.Veggie}`,
      toppings: ["잘게 썬 레지아노 치즈", "마늘", "양파", "버섯", "레드 페퍼"],
    });
  }
}

export default VeggiePizza;
