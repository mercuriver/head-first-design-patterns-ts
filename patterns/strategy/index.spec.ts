import { expect } from "chai";

import defaultMessage, {
  announceMessages,
  quackMessages,
  flyMessages,
} from "./index.meta";

import { MallardDuck, ModelDuck } from "./Ducks";

class QuackMuted {}
class FlyRocketPowered {}

let seq = 1;
describe(`[${seq++}] 물오리 테스트`, function () {
  const duck = new MallardDuck();

  it("자기 소개", function () {
    expect(duck.display()).to.equal(announceMessages.mallard);
  });
  it("헤엄", function () {
    expect(duck.swim()).to.equal(defaultMessage.swim);
  });
  it("꽥꽥", function () {
    expect(duck.performQuack()).to.equal(quackMessages.quack);
  });
  it("비행", function () {
    expect(duck.performFly()).to.equal(flyMessages.fly_with_wings);
  });
});

describe(`[${seq++}] 모형 오리 테스트`, function () {
  const duck = new ModelDuck();

  it("자기 소개", function () {
    expect(duck.display()).to.equal(announceMessages.model);
  });
  it("헤엄", function () {
    expect(duck.swim()).to.equal(defaultMessage.swim);
  });
  it("꽥꽥", function () {
    expect(duck.performQuack()).to.equal(quackMessages.squeak);
  });
  it("비행", function () {
    expect(duck.performFly()).to.equal(flyMessages.fly_no_way);
  });

  it("꽥꽥 방식 변경", function () {
    duck.setQuackBehavior(new QuackMuted());
    expect(duck.performQuack()).to.equal(quackMessages.mute_quack);
  });

  it("비행 방식 변경", function () {
    duck.setFlyBehavior(new FlyRocketPowered());
    expect(duck.performFly()).to.equal(flyMessages.fly_rocket_pewered);
  });
});
