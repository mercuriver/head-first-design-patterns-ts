import Command from "../interfaces/Command";
import { TV } from "../Receiver";

class TVOnCommand implements Command {
  #tv: TV;

  constructor(tv: TV) {
    this.#tv = tv;
  }

  execute(): void {
    this.#tv.on();
    this.#tv.setInputChannel();
  }

  undo(): void {
    this.#tv.off();
  }
}

export default TVOnCommand;
