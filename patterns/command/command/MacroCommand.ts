import Command from "./Command";

class MacroCommand implements Command {
  #commands: Command[];

  constructor(commands: Command[]) {
    this.#commands = Array.isArray(commands) ? commands : [commands];
  }

  execute = (): void => this.#commands.forEach((command) => command.execute());

  /**
   * NOTE: these commands have to be done backwards to ensure
   * proper undo functionality
   */
  undo = (): void => this.#commands.forEach((command) => command.undo());
}

export default MacroCommand;
