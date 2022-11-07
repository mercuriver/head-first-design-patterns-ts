import BasePizza from "./BasePizza";

import { pizzaTypeName } from "../../../index.meta";

class ClamPizza extends BasePizza {
  constructor() {
    super({
      name: `${pizzaTypeName.Cheese}`,
      toppings: ["슈레드 모짜렐라 치즈", "체서피크산 냉동 조개"],
    });
  }
}

export default ClamPizza;
