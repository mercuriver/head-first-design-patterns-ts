import { expect } from "chai";

import Invoker from "./Invoker";
import Light from "./Light";
import LightOnCommand from "./LightOnCommand";
import LightOffCommand from "./LightOffCommand";

describe(`[커멘드 패턴] 테스트`, function () {
  let seq = 1;

  const invoker = new Invoker();
  const lightLivingRoom = new Light("거실");
  const lightKitchen = new Light("주방");

  it(`[${seq++}] Invoker 초기값 확인`, function () {
    console.log(invoker.toString());
    // Todo: 초기 상태 체크
  });

  it(`[${seq++}] 조명 커멘드 등록`, function () {
    // const lightLivingRoomOnCommand = new LightOnCommand(lightLivingRoom);
    // const lightLivingRoomOffCommand = new LightOffCommand(lightLivingRoom);

    // const lightKitchenOnCommand = new LightOnCommand(lightKitchen);
    // const lightKitchenOffCommand = new LightOffCommand(lightKitchen);

    // invoker.setCommand(0, lightLivingRoomOnCommand, lightLivingRoomOffCommand);
    // invoker.setCommand(1, lightKitchenOnCommand, lightKitchenOffCommand);

    invoker.setCommand(
      0,
      new LightOnCommand(lightLivingRoom),
      new LightOffCommand(lightLivingRoom)
    );
    invoker.setCommand(
      1,
      new LightOnCommand(lightKitchen),
      new LightOffCommand(lightKitchen)
    );

    console.log(invoker.toString());
    // Todo: 등록 상태 체크
  });

  it(`[${seq++}] 조명 on/off/undo 동작 테스트`, function () {
    expect(lightLivingRoom.level).to.equal(0);
    expect(lightKitchen.level).to.equal(0);

    console.log("[invoker - 거실] on");
    invoker.onButtonWasPushed(0);
    expect(lightLivingRoom.level).to.equal(100);

    console.log("[invoker - 주방] on");
    invoker.onButtonWasPushed(1);
    expect(lightKitchen.level).to.equal(100);

    console.log("[invoker - 거실] off");
    invoker.offButtonWasPushed(0);
    expect(lightLivingRoom.level).to.equal(0);

    console.log("[invoker - 주방] off");
    invoker.offButtonWasPushed(1);
    expect(lightKitchen.level).to.equal(0);

    console.log("[invoker - 주방] undo");
    invoker.undoButtonWasPushed();
    expect(lightKitchen.level).to.equal(100);

    console.log("[invoker - 주방] undo - 재동작");
    invoker.undoButtonWasPushed();
    expect(lightKitchen.level).to.equal(100);

    console.log("[invoker - 거실] on");
    expect(lightLivingRoom.level).to.equal(0);
    invoker.onButtonWasPushed(0);
    expect(lightLivingRoom.level).to.equal(100);

    console.log("[invoker - 거실] undo");
    invoker.undoButtonWasPushed();
    expect(lightLivingRoom.level).to.equal(0);
    console.log("[invoker - 거실] undo - 재동작");
    invoker.undoButtonWasPushed();
    expect(lightLivingRoom.level).to.equal(0);
  });
});
