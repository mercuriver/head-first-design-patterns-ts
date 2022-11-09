import { PIZZA_STYLE, PIZZA_TYPE, PizzaStyle, PizzaType } from "../index.meta";

type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;

const pizzaStyleName = {
  [PIZZA_STYLE.NEW_YORK]: "뉴욕 스타일",
  [PIZZA_STYLE.CHICAGO]: "시카고 스타일",
};

const pizzaTypeName = {
  [PIZZA_STYLE.NEW_YORK]: {
    [PIZZA_TYPE.CHEESE]: "소스와 치즈 피자",
    [PIZZA_TYPE.VEGGIE]: "베지 피자",
    [PIZZA_TYPE.CLAM]: "크램 피자",
    [PIZZA_TYPE.PEPPERONI]: "페퍼로니 피자",
  },
  [PIZZA_STYLE.CHICAGO]: {
    [PIZZA_TYPE.CHEESE]: "딥 디쉬 치즈 피자",
    [PIZZA_TYPE.VEGGIE]: "베지 피자",
    [PIZZA_TYPE.CLAM]: "크램 피자",
    [PIZZA_TYPE.PEPPERONI]: "페퍼로니 피자",
  },
};

export type { Optional, PizzaStyle, PizzaType };
export { PIZZA_STYLE, pizzaStyleName, PIZZA_TYPE, pizzaTypeName };
