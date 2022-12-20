import { expect } from "chai";

import Duck from "./interfaces/Duck";
import Turkey from "./interfaces/Turkey";

import { MallardDuck, WildTurkey } from "./birds";
import { duckMessages, turkeyMessages } from "./index.meta";

class TurkeyAdapter implements Duck {
  #turkey;
  constructor(turkey: Turkey) {
    this.#turkey = turkey;
  }
  quack(): string {
    return this.#turkey.gobble();
  }
  fly(): string {
    return this.#turkey.fly();
  }
}

describe(`[어댑터 패턴] 테스트`, function () {
  let seq = 1;

  const duck = new MallardDuck();
  const turkey = new WildTurkey();
  const turkeyAdapter = new TurkeyAdapter(turkey);

  it(`[${seq++}] duck 초기값 확인`, function () {
    expect(duck.quack()).to.equal(duckMessages.quack);
    expect(duck.fly()).to.equal(duckMessages.fly);
  });

  it(`[${seq++}] turkey 초기값 확인`, function () {
    expect(turkey.gobble()).to.equal(turkeyMessages.gobble);
    expect(turkey.fly()).to.equal(turkeyMessages.fly);
  });

  it(`[${seq++}] turkeyAdapter 인터페이스 호환 테스트`, function () {
    expect(turkeyAdapter.quack()).to.equal(turkeyMessages.gobble);
    expect(turkeyAdapter.fly()).to.equal(turkeyMessages.fly);
  });
});
