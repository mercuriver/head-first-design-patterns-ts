import Display from "./Display";

import { printf } from "../index.utils";
import { displayTemplate } from "../index.meta";

class CurrentConditionDisplay extends Display {
  setDisplay(): void {
    this.message = printf(
      displayTemplate.currentCodition,
      this.temperature.toString(),
      this.humidity.toString(),
      this.pressure.toString()
    );
  }
}

export default CurrentConditionDisplay;
