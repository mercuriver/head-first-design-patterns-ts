import Command from "./command/Command";
import { NoCommand } from "./command";

const BUTTON_LENGTH = 7;

class Invoker {
  #noCommand: Command;
  #onCommands: Command[];
  #offCommands: Command[];
  #undoCommand: Command;

  constructor() {
    this.#noCommand = new NoCommand();

    this.#onCommands = [];
    this.#offCommands = [];
    this.#undoCommand = this.#noCommand;

    this.#onCommands.length = BUTTON_LENGTH;
    this.#offCommands.length = BUTTON_LENGTH;

    this.#onCommands.fill(this.#noCommand);
    this.#offCommands.fill(this.#noCommand);
  }

  setCommand(slot: number, onCommand: Command, offCommand: Command): void {
    this.#onCommands[slot] = onCommand;
    this.#offCommands[slot] = offCommand;
  }

  #getSlot = (slot: number, pool: Command[]): Command =>
    slot >= 0 && slot < pool.length ? pool[slot] : this.#noCommand;

  #callExecute(command: Command): void {
    command.execute();
    this.#undoCommand = command;
  }

  onButtonWasPushed(slot: number): void {
    this.#callExecute(this.#getSlot(slot, this.#onCommands));
  }

  offButtonWasPushed(slot: number): void {
    this.#callExecute(this.#getSlot(slot, this.#offCommands));
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
