import { expect } from "chai";

import { COST } from "../index.meta";

import {
  HouseBlend,
  DarkRoast,
  Milk,
  Soy,
  Mocha,
  WhippedCream,
  Espresso,
  Decaffeine,
} from "./index";

describe(`이상한 데코레이터 패턴 테스트`, function () {
  const priceMilkCoffee = COST.HOUSE_BLEND + COST.MILK;
  const priceDoNotOrder =
    COST.HOUSE_BLEND + COST.MILK + COST.DECAFFEINE + COST.SOY + COST.DARK_ROAST;
  const price목화커피 = COST.MOCHA + COST.DECAFFEINE + COST.WHIPPED_CREAM;
  const priceHeartbreaker = COST.ESPRESSO * 6;

  it(`기본적인 생성 케이스`, function () {
    const milkCoffee1 = new HouseBlend();
    const milkCoffee = new Milk(milkCoffee1);
    expect(milkCoffee.cost).to.equal(priceMilkCoffee);

    const doNotOrder1 = new HouseBlend();
    const doNotOrder2 = new Milk(doNotOrder1);
    const doNotOrder3 = new Decaffeine(doNotOrder2);
    const doNotOrder4 = new Soy(doNotOrder3);
    const doNotOrder = new DarkRoast(doNotOrder4);
    expect(doNotOrder.cost).to.equal(priceDoNotOrder);

    const 목화커피1 = new Mocha();
    const 목화커피2 = new Decaffeine(목화커피1);
    const 목화커피 = new WhippedCream(목화커피2);
    expect(목화커피.cost).to.equal(price목화커피);

    const heartbreaker1 = new Espresso();
    const heartbreaker2 = new Espresso(heartbreaker1);
    const heartbreaker3 = new Espresso(heartbreaker2);
    const heartbreaker4 = new Espresso(heartbreaker3);
    const heartbreaker5 = new Espresso(heartbreaker4);
    const heartbreaker = new Espresso(heartbreaker5);
    expect(heartbreaker.cost).to.equal(priceHeartbreaker);
  });

  it(`연계 호출 생성 케이스`, function () {
    const milkCoffee = new Milk(new HouseBlend());
    expect(milkCoffee.cost).to.equal(priceMilkCoffee);

    const doNotOrder = new DarkRoast(
      new Soy(new Decaffeine(new Milk(new HouseBlend())))
    );
    expect(doNotOrder.cost).to.equal(priceDoNotOrder);

    const 목화커피 = new WhippedCream(new Decaffeine(new Mocha()));
    expect(목화커피.cost).to.equal(price목화커피);

    const heartbreaker = new Espresso(
      new Espresso(new Espresso(new Espresso(new Espresso(new Espresso()))))
    );
    expect(heartbreaker.cost).to.equal(priceHeartbreaker);
  });

  it(`연계 호출 생성 케이스 - 표현력 개선`, function () {
    const milkCoffee = new HouseBlend().add(Milk);
    expect(milkCoffee.cost).to.equal(priceMilkCoffee);

    const doNotOrder = new HouseBlend()
      .add(Milk)
      .add(Decaffeine)
      .add(Soy)
      .add(DarkRoast);
    expect(doNotOrder.cost).to.equal(priceDoNotOrder);

    const 목화커피 = new Mocha().add(Decaffeine).add(WhippedCream);
    expect(목화커피.cost).to.equal(price목화커피);

    const heartbreaker = new Espresso()
      .add(Espresso)
      .add(Espresso)
      .add(Espresso)
      .add(Espresso)
      .add(Espresso);
    expect(heartbreaker.cost).to.equal(priceHeartbreaker);
  });
});
