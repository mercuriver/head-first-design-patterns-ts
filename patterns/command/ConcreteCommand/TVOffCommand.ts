import Command from "../Command";
import { TV } from "../Receiver";

class TVOffCommand implements Command {
  #tv: TV;

  constructor(tv: TV) {
    this.#tv = tv;
  }

  execute(): void {
    this.#tv.off();
  }

  undo(): void {
    this.#tv.on();
  }
}

export default TVOffCommand;
