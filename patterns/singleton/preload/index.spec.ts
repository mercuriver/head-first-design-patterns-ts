import { expect } from "chai";

import Singleton from "./Singleton";

describe(`[초기 생성 싱글턴] 테스트`, function () {
  it(`싱글턴, 동일 인스턴스 체크`, function () {
    const firstInstance = Singleton.getInstance();
    const secondInstance = Singleton.getInstance();

    expect(firstInstance).to.equal(secondInstance);
  });
});
