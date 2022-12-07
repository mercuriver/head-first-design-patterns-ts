import { expect } from "chai";

import PizzaStore from "./PizzaStore";

import PizzaIngredientFactory from "./ingredientFactory/PizzaIngredientFactory";
import {
  NYPizzaIngredientFactory,
  ChicagoPizzaIngredientFactory,
} from "./ingredientFactory";

import {
  PIZZA_STYLE,
  PIZZA_TYPE,
  pizzaStyleName,
  pizzaTypeName,
  type PizzaStyle,
  type PizzaType,
} from "../index.meta";

const buildAssertion =
  (factory: PizzaIngredientFactory, style: PizzaStyle) =>
  (type: PizzaType): Chai.Assertion => {
    const store = new PizzaStore();
    return expect(store.orderPizza(factory, type).name).to.equal(
      `${pizzaStyleName[style]} ${pizzaTypeName[style][type]}`
    );
  };

describe(`[추상 팩토리 패턴] 테스트`, function () {
  let seq = 1;

  it(`[${seq++}] 뉴욕 피자 생성`, function () {
    const ingredientFactory: PizzaIngredientFactory =
      new NYPizzaIngredientFactory();

    const assertion = buildAssertion(ingredientFactory, PIZZA_STYLE.NEW_YORK);
    assertion(PIZZA_TYPE.CHEESE);
    assertion(PIZZA_TYPE.CLAM);
    assertion(PIZZA_TYPE.VEGGIE);
    assertion(PIZZA_TYPE.PEPPERONI);
  });

  it(`[${seq++}] 시카고 치즈 피자 생성`, function () {
    const ingredientFactory: PizzaIngredientFactory =
      new ChicagoPizzaIngredientFactory();

    const assertion = buildAssertion(ingredientFactory, PIZZA_STYLE.CHICAGO);
    assertion(PIZZA_TYPE.CHEESE);
    assertion(PIZZA_TYPE.CLAM);
    assertion(PIZZA_TYPE.VEGGIE);
    assertion(PIZZA_TYPE.PEPPERONI);
  });
});
