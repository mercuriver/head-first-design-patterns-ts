import { expect } from "chai";

import { NYPizzaStore, ChicagoPizzaStore } from "./stores";
import {
  PIZZA_STYLE,
  PIZZA_TYPE,
  pizzaStyleName,
  pizzaTypeName,
} from "../index.meta";

describe(`팩토리 메소드 패턴 테스트`, function () {
  let seq = 1;

  const nyStore = new NYPizzaStore();
  const chicagoStore = new ChicagoPizzaStore();

  it(`[${seq++}] 피자 펙토리 생성 확인`, function () {
    // expect(nyStore).to.equal();
    // expect(chicagoStore).to.equal();
  });

  it(`[${seq++}] 뉴욕 치즈 피자 생성`, function () {
    const nyCheesePizza = nyStore.orderPizza(PIZZA_TYPE.CHEESE);
    expect(nyCheesePizza.name).to.equal(
      `${pizzaStyleName[PIZZA_STYLE.NEW_YORK]} ${
        pizzaTypeName[PIZZA_STYLE.NEW_YORK][PIZZA_TYPE.CHEESE]
      }`
    );
  });

  it(`[${seq++}] 시카고 치즈 피자 생성`, function () {
    const chicagoCheesePizza = chicagoStore.orderPizza(PIZZA_TYPE.CHEESE);
    expect(chicagoCheesePizza.name).to.equal(
      `${pizzaStyleName[PIZZA_STYLE.CHICAGO]} ${
        pizzaTypeName[PIZZA_STYLE.CHICAGO][PIZZA_TYPE.CHEESE]
      }`
    );
  });
});
