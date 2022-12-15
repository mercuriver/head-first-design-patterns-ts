interface Command {
  execute(): void;
  undo(): void;
}

export default Command;
