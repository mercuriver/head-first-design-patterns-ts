import { expect } from "chai";

import PizzaStore from "./clientWithFactoryMethodPattern/pizzaStore/PizzaStore";
import {
  NYPizzaStore,
  ChicagoPizzaStore,
} from "./clientWithFactoryMethodPattern/pizzaStore";

import {
  PIZZA_STYLE,
  PIZZA_TYPE,
  pizzaStyleName,
  pizzaTypeName,
  type PizzaStyle,
  type PizzaType,
} from "../index.meta";

const pizzaFactoryAssertion = (
  store: PizzaStore,
  style: PizzaStyle,
  type: PizzaType
): Chai.Assertion =>
  expect(store.orderPizza(type).name).to.equal(
    `${pizzaStyleName[style]} ${pizzaTypeName[style][type]}`
  );

describe(`[추상 팩토리 패턴] 테스트`, function () {
  let seq = 1;

  it(`[${seq++}] 뉴욕 피자 생성`, function () {
    const nyStore = new NYPizzaStore();
    pizzaFactoryAssertion(nyStore, PIZZA_STYLE.NEW_YORK, PIZZA_TYPE.CHEESE);
    pizzaFactoryAssertion(nyStore, PIZZA_STYLE.NEW_YORK, PIZZA_TYPE.CLAM);
    pizzaFactoryAssertion(nyStore, PIZZA_STYLE.NEW_YORK, PIZZA_TYPE.VEGGIE);
    pizzaFactoryAssertion(nyStore, PIZZA_STYLE.NEW_YORK, PIZZA_TYPE.PEPPERONI);
  });

  it(`[${seq++}] 시카고 치즈 피자 생성`, function () {
    const chicagoStore = new ChicagoPizzaStore();
    pizzaFactoryAssertion(chicagoStore, PIZZA_STYLE.CHICAGO, PIZZA_TYPE.CHEESE);
    pizzaFactoryAssertion(chicagoStore, PIZZA_STYLE.CHICAGO, PIZZA_TYPE.CLAM);
    pizzaFactoryAssertion(chicagoStore, PIZZA_STYLE.CHICAGO, PIZZA_TYPE.VEGGIE);
    pizzaFactoryAssertion(
      chicagoStore,
      PIZZA_STYLE.CHICAGO,
      PIZZA_TYPE.PEPPERONI
    );
  });
});
