import { expect } from "chai";

import SimpleFactory from "./SimpleFactory";
import PizzaStore from "./PizzaStore";

import { PIZZA_TYPE, pizzaName } from "./index.meta";
import { type PizzaType } from "../index.meta";

const pizzaFactoryAssertion = (
  store: PizzaStore,
  type: PizzaType
): Chai.Assertion =>
  expect(store.orderPizza(type).name).to.equal(pizzaName[type]);

describe(`[심플 팩토리] 테스트`, function () {
  it(`피자 생성`, function () {
    const store = new PizzaStore(new SimpleFactory());
    pizzaFactoryAssertion(store, PIZZA_TYPE.CHEESE);
    pizzaFactoryAssertion(store, PIZZA_TYPE.CLAM);
    pizzaFactoryAssertion(store, PIZZA_TYPE.VEGGIE);
    pizzaFactoryAssertion(store, PIZZA_TYPE.PEPPERONI);
  });
});
