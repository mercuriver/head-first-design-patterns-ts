const PIZZA_STYLE = {
  NEW_YORK: "NY",
  CHICAGO: "Chicago",
} as const;

type PizzaStyle = typeof PIZZA_STYLE[keyof typeof PIZZA_STYLE];

const PIZZA_TYPE = {
  CHEESE: "Cheese",
  VEGGIE: "Veggie",
  CLAM: "Clam",
  PEPPERONI: "Pepperoni",
} as const;

type PizzaType = typeof PIZZA_TYPE[keyof typeof PIZZA_TYPE];

const pizzaStyleName = {
  [PIZZA_STYLE.NEW_YORK]: "뉴욕 스타일",
  [PIZZA_STYLE.CHICAGO]: "시카고 스타일",
};

const pizzaTypeName = {
  [PIZZA_TYPE.CHEESE]: "치즈",
  [PIZZA_TYPE.VEGGIE]: "베지",
  [PIZZA_TYPE.CLAM]: "크램",
  [PIZZA_TYPE.PEPPERONI]: "페퍼로니",
};

export type { PizzaStyle, PizzaType };
export { PIZZA_STYLE, pizzaStyleName, PIZZA_TYPE, pizzaTypeName };
