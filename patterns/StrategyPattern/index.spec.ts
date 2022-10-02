import { expect } from "chai";

import Duck, { meta } from "./Duck";

describe("Duck 테스트", function () {
  const duck = new Duck();

  it("오리 헤엄", function () {
    expect(duck.swim()).to.equal(meta.message_swim);
  });
});
