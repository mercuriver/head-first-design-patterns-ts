import Command from "../interfaces/Command";

class NoCommand implements Command {
  execute(): void {}
  undo(): void {}
}

export default NoCommand;
