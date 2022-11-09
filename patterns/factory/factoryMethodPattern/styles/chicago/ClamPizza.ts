import BasePizza from "./BasePizza";

import { PIZZA_STYLE, PIZZA_TYPE, pizzaTypeName } from "../../../index.meta";

class ClamPizza extends BasePizza {
  constructor() {
    super({
      name: `${pizzaTypeName[PIZZA_STYLE.CHICAGO][PIZZA_TYPE.CLAM]}`,
      toppings: ["슈레드 모짜렐라 치즈", "체서피크산 냉동 조개"],
    });
  }
}

export default ClamPizza;
