import Display from "./Display";

import { printf } from "../index.utils";
import { displayTemplate } from "../index.meta";

class StatisticDisplay extends Display {
  // average 구현 생략
  #highest: number;
  #lowest: number;

  constructor(weatherData) {
    super(weatherData);
    this.#highest = -Infinity;
    this.#lowest = Infinity;
  }

  update(data) {
    const { temperature } = data;
    this.#highest = Math.max(this.#highest, temperature);
    this.#lowest = Math.min(this.#lowest, temperature);
    super.update(data);
  }

  setDisplay(): void {
    this.message = printf(
      displayTemplate.statistic,
      this.temperature.toString(),
      this.#highest.toString(),
      this.#lowest.toString()
    );
  }
}

export default StatisticDisplay;
