import BasePizza from "./BasePizza";

import { pizzaTypeName } from "../../../index.meta";

class CheesePizza extends BasePizza {
  constructor() {
    super({
      name: `${pizzaTypeName.Cheese}`,
      toppings: ["슈레드 모짜렐라 치즈"],
    });
  }
}

export default CheesePizza;
