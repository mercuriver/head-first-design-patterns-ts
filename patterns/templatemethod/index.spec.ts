import { expect } from "chai";

import Tea from "./Tea";
import Coffee from "./Coffee";

import {
  common,
  tea as teaIngredients,
  coffee as coffeeIngredients,
} from "./index.meta";

describe(`[탬플릿 메소드 패턴] 테스트`, function () {
  let seq = 1;

  it(`[${seq++}] 첨가물 없는 Coffee`, function () {
    const coffee = new Coffee(false);

    expect(coffee.prepareRecipe()).to.eql([
      common.boilWater,
      coffeeIngredients.brew,
      common.pourInCup,
    ]);
  });

  it(`[${seq++}] 첨가물 넣은 Coffee`, function () {
    const coffee = new Coffee(true);

    expect(coffee.prepareRecipe()).to.eql([
      common.boilWater,
      coffeeIngredients.brew,
      common.pourInCup,
      coffeeIngredients.condiments,
    ]);
  });

  it(`[${seq++}] 첨가물 없는 Tea`, function () {
    const tea = new Tea(false);

    expect(tea.prepareRecipe()).to.eql([
      common.boilWater,
      teaIngredients.brew,
      common.pourInCup,
    ]);
  });

  it(`[${seq++}] 첨가물 넣은 Tea`, function () {
    const tea = new Tea(true);

    expect(tea.prepareRecipe()).to.eql([
      common.boilWater,
      teaIngredients.brew,
      common.pourInCup,
      teaIngredients.condiments,
    ]);
  });
});
