import { expect } from "chai";

import { DinerMenu, PancakeHouseMenu } from "./ConcreteAggregate";
import Waitress from "./Client/Waitress";

import { dinerMenuName, pancakeHouseMenuName } from "./index.meta";

describe(`[반복자 패턴] 테스트`, function () {
  let seq = 1;

  let pancakeHouseMenu;
  let dinerMenu;
  let waitress;

  beforeEach(() => {
    pancakeHouseMenu = new PancakeHouseMenu();
    dinerMenu = new DinerMenu();
    waitress = new Waitress(pancakeHouseMenu, dinerMenu);
  });

  it(`[${seq++}] 전체 메뉴 체크`, function () {
    expect(waitress.menu).to.eql([
      pancakeHouseMenuName.KBS_PANCAKE_BREAKFAST,
      pancakeHouseMenuName.REGULAR_PANCAKE_BREAKFAST,
      pancakeHouseMenuName.BLUEBERRY_PANCAKES,
      pancakeHouseMenuName.WAFFLES,
      dinerMenuName.VEGETARIAN_BLT,
      dinerMenuName.BLT,
      dinerMenuName.SOUP_OF_THE_DAY,
      dinerMenuName.HOTDOG,
      dinerMenuName.STEAMED_VEGGIES_AND_BROWN_RICE,
      dinerMenuName.PASTA,
    ]);
  });

  it(`[${seq++}] 베지테리언 메뉴 체크`, function () {
    expect(waitress.vegetarianMenu).to.eql([
      pancakeHouseMenuName.KBS_PANCAKE_BREAKFAST,
      pancakeHouseMenuName.BLUEBERRY_PANCAKES,
      pancakeHouseMenuName.WAFFLES,
      dinerMenuName.VEGETARIAN_BLT,
      dinerMenuName.STEAMED_VEGGIES_AND_BROWN_RICE,
      dinerMenuName.PASTA,
    ]);
  });

  it(`[${seq++}] 단일 메뉴 베지테리언 체크: ${
    pancakeHouseMenuName.WAFFLES
  }`, function () {
    expect(waitress.isItemVegetarian(pancakeHouseMenuName.WAFFLES)).to.be.true;
  });

  it(`[${seq++}] 단일 메뉴 베지테리언 체크: ${
    dinerMenuName.HOTDOG
  }`, function () {
    expect(waitress.isItemVegetarian(dinerMenuName.HOTDOG)).to.be.false;
  });

  it(`[${seq++}] 단일 메뉴 베지테리언 체크: ${
    dinerMenuName.STEAMED_VEGGIES_AND_BROWN_RICE
  }`, function () {
    expect(
      waitress.isItemVegetarian(dinerMenuName.STEAMED_VEGGIES_AND_BROWN_RICE)
    ).to.be.true;
  });
});
