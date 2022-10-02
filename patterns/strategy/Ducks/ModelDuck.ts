import Duck from "./Duck";
import { modelDuck } from "../index.meta";

class ModelDuck extends Duck {
  constructor() {
    super();
  }

  display(): string {
    return modelDuck.message_display;
  }
}

export default ModelDuck;
