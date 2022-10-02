import { expect } from "chai";

import defaultMessage, {
  mallardDuck,
  modelDuck,
  extraMessages,
} from "./index.meta";

describe("물오리 테스트", function () {
import MallardDuck from "./MallardDuck";
  const duck = new MallardDuck();

  it("자기 소개", function () {
    expect(duck.display()).to.equal(mallardDuck.message_display);
  });
  it("헤엄", function () {
    expect(duck.swim()).to.equal(meta.message_swim);
  });
  // it("꽥꽥", function () {
  //   expect(duck.quack()).to.equal("꽥");
  // });
  // it("비행", function () {
  //   expect(duck.fly()).to.equal("날고 있어요!!");
  // });
    expect(duck.swim()).to.equal(defaultMessage.message_swim);
});
