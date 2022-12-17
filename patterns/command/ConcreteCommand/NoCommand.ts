import Command from "../Command";

class NoCommand implements Command {
  execute(): void {}
  undo(): void {}
}

export default NoCommand;
