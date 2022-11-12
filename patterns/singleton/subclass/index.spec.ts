import { expect } from "chai";

import SingletonCooler from "./SingletonCooler";
import SingletonHotter from "./SingletonHotter";

describe(`[싱글턴 - 서브클래스] 테스트`, function () {
  it(`싱글턴, 동일하지 않은 인스턴스 체크`, function () {
    const cooler = SingletonCooler.getInstance();
    const hotter = SingletonHotter.getInstance();

    expect(cooler).to.not.equal(hotter);
  });
});
