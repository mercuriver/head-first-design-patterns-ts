import Command from "./Command";

import NoCommand from "./NoCommand";

const BUTTON_LENGTH = 7;

class Invoker {
  #onCommands: Command[];
  #offCommands: Command[];

  constructor() {
    this.#onCommands = [];
    this.#offCommands = [];

    this.#onCommands.length = BUTTON_LENGTH;
    this.#offCommands.length = BUTTON_LENGTH;

    this.#onCommands.fill(new NoCommand());
    this.#offCommands.fill(new NoCommand());
  }

  setCommand(slot: number, onCommand: Command, offCommand: Command): void {
    this.#onCommands[slot] = onCommand;
    this.#offCommands[slot] = offCommand;
  }

  onButtonWasPushed(slot: number): void {
    this.#onCommands[slot].execute();
  }

  offButtonWasPushed(slot: number): void {
    this.#offCommands[slot].execute();
  }

  toString(): string {
    const result = this.#onCommands.map((_, index) => {
      const onCommand = this.#onCommands[index];
      const offCommand = this.#offCommands[index];
      return `[slot ${index}] ${onCommand.constructor.name} ${offCommand.constructor.name}`;
    });

    result.unshift(`\n------ Remote Control List Start -------\n`);
    result.push(`\n------ Remote Control List End -------\n`);
    return result.join("\n");
  }
}

export default Invoker;
