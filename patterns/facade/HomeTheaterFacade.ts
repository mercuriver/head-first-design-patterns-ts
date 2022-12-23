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
  #amp: Amplifier;
  #tuner: Tuner;
  #player: StreamingPlayer;
  #cd: CdPlayer;
  #projector: Projector;
  #lights: TheaterLights;
  #screen: Screen;
  #popper: PopcornPopper;

  constructor({ amp, tuner, player, cd, projector, lights, screen, popper }) {
    this.#amp = amp;
    this.#tuner = tuner;
    this.#player = player;
    this.#cd = cd;
    this.#projector = projector;
    this.#lights = lights;
    this.#screen = screen;
    this.#popper = popper;
  }

  watchMovie(title: string): void {
    console.log("Get ready to watch a movie...");
    this.#popper.on();
    this.#popper.pop();
    this.#lights.dim(10);
    this.#screen.down();
    this.#projector.on();
    this.#projector.wideScreenMode();
    this.#amp.on();
    this.#amp.setStreamingPlayer(this.#player);
    this.#amp.setSurroundSound();
    this.#amp.setVolume(5);
    this.#player.on();
    this.#player.play(title);
  }

  endMovie(): void {
    console.log("Shutting movie theater down...");
    this.#popper.off();
    this.#lights.on();
    this.#screen.up();
    this.#projector.off();
    this.#amp.off();
    this.#player.stop();
    this.#player.off();
  }

  listenToRadio(frequency: number): void {
    console.log("Tuning in the airwaves...");
    this.#tuner.on();
    this.#tuner.setFrequency(frequency);
    this.#amp.on();
    this.#amp.setVolume(5);
    this.#amp.setTuner(this.#tuner);
  }

  endRadio(): void {
    console.log("Shutting down the tuner...");
    this.#tuner.off();
    this.#amp.off();
  }
}

export default HomeTheaterFacade;
