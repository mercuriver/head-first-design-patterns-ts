import Command from "./Command";

import NoCommand from "./NoCommand";

const BUTTON_LENGTH = 7;

class Invoker {
  #onCommands: Command[];
  #offCommands: Command[];
  #undoCommand: Command;

  constructor() {
    this.#onCommands = [];
    this.#offCommands = [];
    this.#undoCommand = new NoCommand();

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
    this.#undoCommand = this.#onCommands[slot];
  }

  offButtonWasPushed(slot: number): void {
    this.#offCommands[slot].execute();
    this.#undoCommand = this.#offCommands[slot];
  }

  undoButtonWasPushed(): void {
    this.#undoCommand.undo();
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
