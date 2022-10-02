import { expect } from "chai";

import defaultMessage, {
  mallardDuck,
  modelDuck,
  extraMessages,
} from "./index.meta";

import MallardDuck from "./MallardDuck";

class ModelDuck {}
class QuackMuted {}
class FlyRocketPowered {}

let seq = 1;
describe(`[${seq++}] 물오리 테스트`, function () {
  const duck = new MallardDuck();

  it("자기 소개", function () {
    expect(duck.display()).to.equal(mallardDuck.message_display);
  });
  it("헤엄", function () {
    expect(duck.swim()).to.equal(defaultMessage.message_swim);
  });
  it("꽥꽥", function () {
    expect(duck.performQuack()).to.equal(mallardDuck.message_quack);
  });
  it("비행", function () {
    expect(duck.performFly()).to.equal(mallardDuck.message_fly);
  });
});

describe(`[${seq++}] 모형 오리 테스트`, function () {
  const duck = new ModelDuck();

  it("자기 소개", function () {
    expect(duck.display()).to.equal(modelDuck.message_display);
  });
  it("헤엄", function () {
    expect(duck.swim()).to.equal(defaultMessage.message_swim);
  });
  it("꽥꽥", function () {
    expect(duck.performQuack()).to.equal(modelDuck.message_quack);
  });
  it("비행", function () {
    expect(duck.performFly()).to.equal(modelDuck.message_fly);
  });

  it("꽥꽥 방식 변경", function () {
    duck.setQuackBehavior(new QuackMuted());
    expect(duck.performQuack()).to.equal(extraMessages.message_quack_mute);
  });

  it("비행 방식 변경", function () {
    duck.setFlyBehavior(new FlyRocketPowered());
    expect(duck.performFly()).to.equal(extraMessages.message_fly_rocket);
  });
});
