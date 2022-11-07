import BasePizza from "./BasePizza";

import { pizzaTypeName } from "../../../index.meta";

class ClamPizza extends BasePizza {
  constructor() {
    super({
      name: `${pizzaTypeName.Clam}`,
      toppings: ["잘게 썬 레지아노 치즈", "롱아일랜드 사운드의 신선한 조개"],
    });
  }
}

export default ClamPizza;
