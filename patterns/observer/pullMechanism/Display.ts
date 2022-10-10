import PullMechanismObserver from "../interfaces/PullMechanismObserver";
import DisplayElement from "../interfaces/DisplayElement";
import WeatherData from "./WeatherData";
import { displayTemplate } from "../index.meta";

abstract class Display implements PullMechanismObserver, DisplayElement {
  #weatherData: WeatherData;
  #temperature: number;
  #message: string;

  constructor(weatherData: WeatherData) {
    this.#weatherData = weatherData;
    this.#weatherData.registerObserver(this);
    this.#message = displayTemplate.defaultMessage;
  }

  leave(): void {
    this.#weatherData.removeObserver(this);
  }
  update() {
    // 모든 Display에서 사용할 공동 동작이 있다면 이 함수에서 처리
    this.#temperature = this.#weatherData.temperature;
    this.setDisplay();
  }

  setDisplay(): void {}

  display(): string {
    return this.#message;
  }

  get weatherData(): WeatherData {
    return this.#weatherData;
  }
  get temperature(): number {
    return this.#temperature;
  }

  set message(value: string) {
    console.log(value);
    this.#message = value;
  }
}

export default Display;
