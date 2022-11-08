import BasePizza from "./BasePizza";

import { PIZZA_STYLE, PIZZA_TYPE, pizzaTypeName } from "../../../index.meta";

class PepperoniPizza extends BasePizza {
  constructor() {
    super({
      name: `${pizzaTypeName[PIZZA_STYLE.CHICAGO][PIZZA_TYPE.PEPPERONI]}`,
      toppings: [
        "슈레드 모짜렐라 치즈",
        "블랙 올리브",
        "시금치",
        "가지",
        "얇게 썬 페퍼로니",
      ],
    });
  }
}

export default PepperoniPizza;
