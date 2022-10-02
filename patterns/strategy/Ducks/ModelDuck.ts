import Duck from "./Duck";
import { announceMessages } from "../index.meta";

class ModelDuck extends Duck {
  constructor() {
    super();
  }

  display(): string {
    return announceMessages.model;
  }
}

export default ModelDuck;
