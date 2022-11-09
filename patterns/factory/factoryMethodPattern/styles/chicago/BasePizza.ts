import Pizza from "../../Pizza";
import type { PizzaProps } from "../../Pizza";

import type { Optional } from "../../index.meta";
import { pizzaStyleName } from "../../index.meta";

type Props = Optional<PizzaProps, "dough" | "sauce">;

abstract class BasePizza extends Pizza {
  constructor({ name, dough, sauce, toppings }: Props) {
    super({
      name: `${pizzaStyleName.Chicago} ${name}`,
      dough: dough || "아주 두꺼운 크러스트 도우",
      sauce: sauce || "플럼토마토 소스",
      toppings,
    });
  }

  cut(): void {
    console.log("네모난 모양으로 피자 자르기");
  }
}

export default BasePizza;
