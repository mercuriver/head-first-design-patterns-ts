import Display from "./Display";

import { printf } from "../index.utils";
import { displayTemplate } from "../index.meta";

class StatisticDisplay extends Display {
  // average 구현 생략
  // #highest;
  // #lowest;
  highest: number;
  lowest: number;
  // classfield(#)을 사용할 경우 Display 추상 클레스에서 display() 호출 시 에러 발생, 확인 필요

  constructor(weatherData) {
    super(weatherData);
    this.highest = this.temperature;
    this.lowest = this.temperature;
  }

  update(data) {
    const { temperature } = data;
    this.highest = Math.max(this.highest, temperature);
    this.lowest = Math.min(this.lowest, temperature);
    super.update(data);
  }

  display() {
    const message = printf(
      displayTemplate.statistic,
      this.temperature.toString(),
      this.highest.toString(),
      this.lowest.toString()
    );
    console.log(message);
    return message;
  }
}

export default StatisticDisplay;
