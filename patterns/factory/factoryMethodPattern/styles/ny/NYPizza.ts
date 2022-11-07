import Pizza from "../../Pizza";
import type { PizzaProps } from "../../Pizza";

import type { Optional } from "../../../index.meta";
import { pizzaStyleName } from "../../../index.meta";

type Props = Optional<PizzaProps, "dough" | "sauce">;

class NYPizza extends Pizza {
  constructor({ name, dough, sauce, toppings }: Props) {
    super({
      name: `${pizzaStyleName.NY} ${name}`,
      dough: dough || "씬 크러스트 도우",
      sauce: sauce || "마리나라 소스",
      toppings,
    });
  }
}

export default NYPizza;
