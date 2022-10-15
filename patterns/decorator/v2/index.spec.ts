import { expect } from "chai";

import { COST } from "../index.meta";

import { HouseBlend, DarkRoast, Milk, Soy } from "./index";

describe(`이상한 데코레이터 패턴 테스트`, function () {
  it(`기본적인 음료 테스트`, function () {
    const milkCoffee = new Milk(new HouseBlend());
    expect(milkCoffee.cost).to.equal(COST.HOUSE_BLEND + COST.MILK);
    // const doNotOrder = new DarkRoast(new Soy(new Milk(new HouseBlend())));

    const doNotOrder = new DarkRoast().add(Soy).add(Milk).add(HouseBlend);

    expect(doNotOrder.cost).to.equal(
      COST.HOUSE_BLEND + COST.MILK + COST.DARK_ROAST + COST.SOY
    );

    const somethingWrong = new DarkRoast()
      .add(DarkRoast)
      .add(DarkRoast)
      .add(DarkRoast)
      .add(DarkRoast)
      .add(DarkRoast);

    expect(somethingWrong.cost).to.equal(COST.DARK_ROAST * 6);
  });
});
