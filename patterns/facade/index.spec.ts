import { expect } from "chai";

import {
  Amplifier,
  Tuner,
  StreamingPlayer,
  CdPlayer,
  Projector,
  TheaterLights,
  Screen,
  PopcornPopper,
} from "./subsystem";

class HomeTheaterFacade {
  constructor(...list: any) {
    console.log(list);
  }
}

describe(`[퍼사드 패턴] 테스트`, function () {
  let seq = 1;

  const amp: Amplifier = new Amplifier("Amplifier");
  const tuner: Tuner = new Tuner("AM/FM Tuner", amp);
  const player: StreamingPlayer = new StreamingPlayer("Streaming Player", amp);
  const cd: CdPlayer = new CdPlayer("CD Player", amp);
  const projector: Projector = new Projector("Projector", player);
  const lights: TheaterLights = new TheaterLights("Theater Ceiling Lights");
  const screen: Screen = new Screen("Theater Screen");
  const popper: PopcornPopper = new PopcornPopper("Popcorn Popper");

  describe(`서브시스템 직접 제어 테스트`, function () {
    it(`[${seq++}] 서브시스템, 초기값 확인`, function () {
      console.log("초기값 확인");
    });

    it(`[${seq++}] 서브시스템, 직접 On 상태로 제어`, function () {});

    it(`[${seq++}] 서브시스템, 직접 Off 상태로 제어`, function () {});
  });

  describe(`파사드 홈시어터 제어 테스트`, function () {
    const homeTheater: HomeTheaterFacade = new HomeTheaterFacade(
      amp,
      tuner,
      player,
      projector,
      screen,
      lights,
      popper
    );

    it(`[${seq++}] 파사드 홈시어터, 초기값 확인`, function () {
      console.log("초기값 확인");
    });

    it(`[${seq++}] 파사드 홈시어터, On 상태로 제어`, function () {});

    it(`[${seq++}] 파사드 홈시어터, Off 상태로 제어`, function () {});
  });
});
