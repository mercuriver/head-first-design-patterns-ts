import Display from "./Display";

import { printf } from "../index.utils";
import { displayTemplate } from "../index.meta";

class CurrentConditionDisplay extends Display {
  #humidity;
  #pressure;

  update(): void {
    this.#humidity = this.weatherData.humidity;
    this.#pressure = this.weatherData.pressure;
    super.update();
  }

  display(): string {
    const message = printf(
      displayTemplate.currentCodition,
      this.temperature.toString(),
      this.#humidity.toString(),
      this.#pressure.toString()
    );
    console.log(message);
    return message;
  }
}

export default CurrentConditionDisplay;
