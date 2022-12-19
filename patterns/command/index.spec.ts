import { expect } from "chai";

import Invoker from "./Invoker";
import { Light, TV } from "./Receiver";
import {
  LightOnCommand,
  LightOffCommand,
  TVOnCommand,
  TVOffCommand,
  MacroCommand,
} from "./ConcreteCommand";

describe(`[커멘드 패턴] 테스트`, function () {
  let seq = 1;

  let invoker;
  let lightLivingRoom;
  let lightKitchen;

  beforeEach(() => {
    // 인보커 생성
    invoker = new Invoker();

    // 리시버 생성
    lightLivingRoom = new Light("거실");
    lightKitchen = new Light("주방");
  });

  const setCommand = () => {
    // 인보커에 커멘드 구상 클래스 등록
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
  };

  it(`[${seq++}] Invoker 초기값 확인`, function () {
    console.log(invoker.toString());
    // Todo: 초기 상태 체크
  });

  it(`[${seq++}] 조명 커멘드 등록`, function () {
    setCommand();
    console.log(invoker.toString());
    // Todo: 등록 상태 체크
  });

  it(`[${seq++}] 조명 on/off 동작 테스트`, function () {
    setCommand();

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

    console.log("[invoker - 거실] on");
    expect(lightLivingRoom.level).to.equal(0);
    invoker.onButtonWasPushed(0);
    expect(lightLivingRoom.level).to.equal(100);
  });

  it(`[${seq++}] 조명 undo 동작 테스트`, function () {
    setCommand();

    expect(lightLivingRoom.level).to.equal(0);
    expect(lightKitchen.level).to.equal(0);

    console.log("[invoker - 거실] on");
    invoker.onButtonWasPushed(0);
    expect(lightLivingRoom.level).to.equal(100);

    console.log("[invoker - 거실] undo");
    invoker.undoButtonWasPushed();
    expect(lightLivingRoom.level).to.equal(0);
    console.log("[invoker - 거실] undo - 재동작");
    invoker.undoButtonWasPushed();
    expect(lightLivingRoom.level).to.equal(0);

    console.log("[invoker - 주방] on");
    invoker.onButtonWasPushed(1);
    expect(lightKitchen.level).to.equal(100);

    console.log("[invoker - 주방] undo");
    invoker.undoButtonWasPushed();
    expect(lightKitchen.level).to.equal(0);
    console.log("[invoker - 주방] undo - 재동작");
    invoker.undoButtonWasPushed();
    expect(lightKitchen.level).to.equal(0);
  });

  it(`[${seq++}] 복합 커멘드 on/off 동작 테스트`, function () {
    // 리시버
    const tv = new TV("거실");

    // (복합) 커멘드 구상 클래스
    const commandOn = [
      new TVOnCommand(tv),
      new LightOnCommand(lightLivingRoom),
      new LightOnCommand(lightKitchen),
    ];
    const commandOff = [
      new TVOffCommand(tv),
      new LightOffCommand(lightLivingRoom),
      new LightOffCommand(lightKitchen),
    ];

    // 인보커에 커멘드 구상 클래스 등록
    invoker.setCommand(
      2,
      new MacroCommand(commandOn),
      new MacroCommand(commandOff)
    );

    console.log("[invoker - 복합 커멘드] 등록");
    console.log(invoker.toString());

    console.log("[invoker - 복합 커멘드] on");
    invoker.onButtonWasPushed(2);

    console.log("[invoker - 복합 커멘드] off");
    invoker.offButtonWasPushed(2);

    console.log("[invoker - 복합 커멘드] undo");
    invoker.undoButtonWasPushed(0);
  });
});
