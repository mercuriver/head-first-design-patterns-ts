import { expect } from "chai";

import PizzaStore from "./PizzaStore";
import { NYPizzaStore, ChicagoPizzaStore } from "./stores";
import {
  PIZZA_STYLE,
  PIZZA_TYPE,
  pizzaStyleName,
  pizzaTypeName,
  type PizzaStyle,
  type PizzaType,
} from "../index.meta";

const pizzaFactory = (
  store: PizzaStore,
  style: PizzaStyle,
  type: PizzaType
): Chai.Assertion =>
  expect(store.orderPizza(type).name).to.equal(
    `${pizzaStyleName[style]} ${pizzaTypeName[style][type]}`
  );

describe(`[팩토리 메소드 패턴] 테스트`, function () {
  let seq = 1;

  const nyStore = new NYPizzaStore();
  const chicagoStore = new ChicagoPizzaStore();

  it(`[${seq++}] 뉴욕 피자 생성`, function () {
    pizzaFactory(nyStore, PIZZA_STYLE.NEW_YORK, PIZZA_TYPE.CHEESE);
    pizzaFactory(nyStore, PIZZA_STYLE.NEW_YORK, PIZZA_TYPE.CLAM);
    pizzaFactory(nyStore, PIZZA_STYLE.NEW_YORK, PIZZA_TYPE.VEGGIE);
    pizzaFactory(nyStore, PIZZA_STYLE.NEW_YORK, PIZZA_TYPE.PEPPERONI);
  });

  it(`[${seq++}] 시카고 치즈 피자 생성`, function () {
    pizzaFactory(chicagoStore, PIZZA_STYLE.CHICAGO, PIZZA_TYPE.CHEESE);
    pizzaFactory(chicagoStore, PIZZA_STYLE.CHICAGO, PIZZA_TYPE.CLAM);
    pizzaFactory(chicagoStore, PIZZA_STYLE.CHICAGO, PIZZA_TYPE.VEGGIE);
    pizzaFactory(chicagoStore, PIZZA_STYLE.CHICAGO, PIZZA_TYPE.PEPPERONI);
  });
});
