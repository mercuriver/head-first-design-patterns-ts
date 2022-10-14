import { expect } from "chai";

import { COST } from "./index.meta";

import { HouseBlend } from "./beverage";
import { Milk } from "./extra";

describe(`데코레이터 패턴 테스트`, function () {
  it(`기본적인 음료 테스트`, function () {
    const milkCoffee = new Milk(new HouseBlend());

    expect(milkCoffee.cost()).to.equal(COST.HOUSE_BLEND + COST.MILK);
  });
});
