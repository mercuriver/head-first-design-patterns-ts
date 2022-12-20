import { expect } from "chai";

import { MallardDuck, WildTurkey } from "./birds";
import { DuckAdapter, TurkeyAdapter } from "./adapter";

import { duckMessages, turkeyMessages } from "./index.meta";

describe(`[어댑터 패턴] 테스트`, function () {
  let seq = 1;

  const duck = new MallardDuck();
  const turkey = new WildTurkey();

  it(`[${seq++}] duck 초기값 확인`, function () {
    expect(duck.quack()).to.equal(duckMessages.quack);
    expect(duck.fly()).to.equal(duckMessages.fly);
  });

  it(`[${seq++}] turkey 초기값 확인`, function () {
    expect(turkey.gobble()).to.equal(turkeyMessages.gobble);
    expect(turkey.fly()).to.equal(turkeyMessages.fly);
  });

  const turkeyAdapter = new TurkeyAdapter(turkey);

  it(`[${seq++}] turkeyAdapter 인터페이스 호환 테스트, turkey를 duck처럼 사용`, function () {
    expect(turkeyAdapter.quack()).to.equal(turkeyMessages.gobble);
    expect(turkeyAdapter.fly()).to.equal(turkeyMessages.fly);
  });

  const duckAdapter = new DuckAdapter(duck);
  it(`[${seq++}] duckAdapter 인터페이스 호환 테스트, duck을 turkey처럼 사용`, function () {
    expect(duckAdapter.gobble()).to.equal(duckMessages.quack);
    expect(duckAdapter.fly()).to.equal(duckMessages.fly);
  });
});
