import Display from "./Display";

import { printf } from "./index.utils";
import { displayTemplate } from "./index.meta";
class StatisticDisplay extends Display {
  // average 구현 생략
  // #highest;
  // #lowest;
  highest: number;
  lowest: number;
  // classfield(#)을 사용할 경우 Display 추상 클레스에서 display() 호출 시 에러 발생, 확인 필요

  constructor(weatherData) {
    console.log("####### constructor");
    super(weatherData);
    this.highest = -99;
    this.lowest = 99;
    console.log("####### 3", this.highest, this.lowest);
  }

  update(temp: number, humidity: number, pressure: number): void {
    console.log("####### 1", temp, this.highest, this.lowest);
    this.highest = Math.max(this.highest, temp);
    this.lowest = Math.min(this.lowest, temp);
    console.log("####### 2", temp, this.highest, this.lowest);
    super.update(temp, humidity, pressure);
  }

  display(): string {
    console.log("#######", this.highest, this.lowest);
    const message = printf(
      displayTemplate.statistic,
      this.temperature,
      this.highest.toString(),
      this.lowest.toString()
    );
    console.log(message);
    return message;
  }
}

export default StatisticDisplay;
