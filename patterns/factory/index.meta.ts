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

export type { PizzaStyle, PizzaType };
export { PIZZA_STYLE, PIZZA_TYPE };
