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

import HomeTheaterFacade from "./HomeTheaterFacade";

describe(`[퍼사드 패턴] 테스트`, function () {
  let seq = 1;

  const movie = "Whiplash";

  const getSubsystem = () => {
    const amp: Amplifier = new Amplifier("Amplifier");
    const tuner: Tuner = new Tuner("AM/FM Tuner", amp);
    const player: StreamingPlayer = new StreamingPlayer(
      "Streaming Player",
      amp
    );
    const cd: CdPlayer = new CdPlayer("CD Player", amp);
    const projector: Projector = new Projector("Projector", player);
    const lights: TheaterLights = new TheaterLights("Theater Ceiling Lights");
    const screen: Screen = new Screen("Theater Screen");
    const popper: PopcornPopper = new PopcornPopper("Popcorn Popper");

    const checkIsDefaultMode = () => {
      expect(popper.isOn).to.be.false;
      expect(lights.level).to.equal(0);
      expect(screen.isUp).to.be.true;
      expect(projector.isOn).to.be.false;
      expect(amp.isOn).to.be.false;
      expect(amp.volumn).to.equal(0);
      expect(player.isOn).to.false;
    };

    const checkIsWatchMovieMode = () => {
      expect(popper.isOn).to.be.true;
      expect(lights.level).to.equal(10);
      expect(screen.isUp).to.be.false;
      expect(projector.isOn).to.be.true;
      expect(amp.isOn).to.be.true;
      expect(amp.volumn).to.equal(5);
      expect(player.isOn).to.true;
    };

    const checkIsEndMovieMode = () => {
      expect(popper.isOn).to.be.false;
      expect(lights.level).to.equal(100);
      expect(screen.isUp).to.be.true;
      expect(projector.isOn).to.be.false;
      expect(amp.isOn).to.be.false;
      expect(amp.volumn).to.equal(0);
      expect(player.isOn).to.false;
    };

    return {
      subsystem: {
        amp,
        tuner,
        player,
        cd,
        projector,
        lights,
        screen,
        popper,
      },
      checker: {
        checkIsDefaultMode,
        checkIsWatchMovieMode,
        checkIsEndMovieMode,
      },
    };
  };

  describe(`서브시스템 직접 제어 테스트`, function () {
    const {
      subsystem: { amp, tuner, player, cd, projector, lights, screen, popper },
      checker,
    } = getSubsystem();

    it(`[${seq++}] 서브시스템, 초기값 확인`, function () {
      console.log("초기값 확인");
      checker.checkIsDefaultMode();
    });

    it(`[${seq++}] 서브시스템 직접 제어하여 영화 시청`, function () {
      popper.on();
      popper.pop();
      lights.dim(10);
      screen.down();
      projector.on();
      projector.wideScreenMode();
      amp.on();
      amp.setStreamingPlayer(player);
      amp.setSurroundSound();
      amp.setVolume(5);
      player.on();
      player.play(movie);

      checker.checkIsWatchMovieMode();
    });

    it(`[${seq++}] 서브시스템을 직접 제어하여 영화 종료`, function () {
      popper.off();
      lights.on();
      screen.up();
      projector.off();
      amp.off();
      player.stop();
      player.off();

      checker.checkIsEndMovieMode();
    });
  });

  describe(`파사드 홈시어터 제어 테스트`, function () {
    const { subsystem, checker } = getSubsystem();
    const homeTheater: HomeTheaterFacade = new HomeTheaterFacade(subsystem);

    it(`[${seq++}] 파사드 홈시어터, 초기값 확인`, function () {
      console.log("초기값 확인");
      checker.checkIsDefaultMode();
    });

    it(`[${seq++}] 파사드 홈시어터를 통한 영화 시청 요청`, function () {
      homeTheater.watchMovie(movie);
      checker.checkIsWatchMovieMode();
    });

    it(`[${seq++}] 파사드 홈시어터를 통한 영화 종료 요청`, function () {
      homeTheater.endMovie();
      checker.checkIsEndMovieMode();
    });
  });
});
