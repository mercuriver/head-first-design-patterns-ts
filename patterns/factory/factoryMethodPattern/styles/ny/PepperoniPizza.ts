import BasePizza from "./BasePizza";

import { pizzaTypeName } from "../../../index.meta";

class PepperoniPizza extends BasePizza {
  constructor() {
    super({
      name: `${pizzaTypeName.Pepperoni}`,
      toppings: [
        "잘게 썬 레지아노 치즈",
        "얇게 썬 페퍼로니",
        "마늘",
        "양파",
        "버섯",
        "레드 페퍼",
      ],
    });
  }
}

export default PepperoniPizza;
