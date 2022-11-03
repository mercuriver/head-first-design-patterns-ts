import { expect } from "chai";

class PizzaStore {
  orderPizza(value) {
    return {
      get name() {
        return "";
      },
    };
  }
}
class NYPizzaStore extends PizzaStore {}
class ChicagoPizzaStore extends PizzaStore {}

const name = {
  ny: {
    cheese: "nyCheese",
  },
  chicago: {
    cheese: "chicagoCheese",
  },
};

describe(`팩토리 메소드 패턴 테스트`, function () {
  let seq = 1;

  const nyStore = new NYPizzaStore();
  const chicagoStore = new ChicagoPizzaStore();

  it(`[${seq++}] 피자 펙토리 생성 확인`, function () {
    // expect(nyStore).to.equal();
    // expect(chicagoStore).to.equal();
  });

  it(`[${seq++}] 뉴욕 치즈 피자 생성`, function () {
    const nyCheesePizza = nyStore.orderPizza("cheese");
    expect(nyCheesePizza.name).to.equal(name.ny.cheese);
  });

  it(`[${seq++}] 시카고 치즈 피자 생성`, function () {
    const chicagoCheesePizza = chicagoStore.orderPizza("cheese");
    expect(chicagoCheesePizza.name).to.equal(name.chicago.cheese);
  });
});
