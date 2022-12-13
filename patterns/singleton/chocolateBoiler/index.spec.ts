import { expect } from "chai";

import SingletonChocolateBoiler from "./SingletonChocolateBoiler";

describe(`[기본 싱글턴 - 초콜릿 보일러] 테스트`, function () {
  it(`싱글턴, 동일 인스턴스 체크`, function () {
    const firstBoiler = SingletonChocolateBoiler.getInstance();
    const secondBoiler = SingletonChocolateBoiler.getInstance();

    firstBoiler.fill();
    secondBoiler.fill();
    firstBoiler.boil();
    secondBoiler.boil();
    secondBoiler.drain();
    firstBoiler.drain();

    expect(firstBoiler).to.equal(secondBoiler);
  });
});
