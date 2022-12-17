import Command from "../Command";
import Light from "../Light";

class LightOffCommand implements Command {
  #light: Light;

  constructor(light: Light) {
    this.#light = light;
  }

  execute(): void {
    this.#light.off();
  }

  undo(): void {
    this.#light.on();
  }
}

export default LightOffCommand;
