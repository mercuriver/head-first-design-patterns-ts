import { expect } from "chai";

import Invoker from "./Invoker";
import Light from "./Light";
import LightOnCommand from "./LightOnCommand";
import LightOffCommand from "./LightOffCommand";

describe(`[커멘드 패턴] 테스트`, function () {
  let seq = 1;

  const invoker = new Invoker();

  it(`[${seq++}] Invoker 초기값 확인`, function () {
    console.log(invoker.toString());
  });

  it(`[${seq++}] 조명 커멘드 등록`, function () {
    const lightLivingRoom = new Light("거실");
    const lightKitchen = new Light("주방");

    const lightLivingRoomOnCommand = new LightOnCommand(lightLivingRoom);
    const lightLivingRoomOffCommand = new LightOffCommand(lightLivingRoom);

    const lightKitchenOnCommand = new LightOnCommand(lightKitchen);
    const lightKitchenOffCommand = new LightOffCommand(lightKitchen);

    invoker.setCommand(0, lightLivingRoomOnCommand, lightLivingRoomOffCommand);
    invoker.setCommand(1, lightKitchenOnCommand, lightKitchenOffCommand);

    console.log(invoker.toString());
  });
});
