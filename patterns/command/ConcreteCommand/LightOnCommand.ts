import Command from "../Command";
import { Light } from "../Receiver";

class LightOnCommand implements Command {
  #light: Light;

  constructor(light: Light) {
    this.#light = light;
  }

  execute(): void {
    this.#light.on();
  }

  undo(): void {
    this.#light.off();
  }
}

export default LightOnCommand;
