import Display from "./Display";

import { printf } from "./index.utils";
import { displayTemplate } from "./index.meta";

class CurrentConditionDisplay extends Display {
  display(): string {
    const message = printf(
      displayTemplate.currentCodition,
      this.temperature,
      this.humidity,
      this.pressure
    );
    console.log(message);
    return message;
  }
}

export default CurrentConditionDisplay;
