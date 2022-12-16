import Command from "../command/Command";
import { Light } from "../command";

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
