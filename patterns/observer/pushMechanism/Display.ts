import Observer from "../interfaces/Observer";
import DisplayElement from "../interfaces/DisplayElement";
import WeatherData, { WeatherDataType } from "./WeatherData";

abstract class Display implements Observer<WeatherDataType>, DisplayElement {
  #weatherData: WeatherData;
  #temperature: number;
  #humidity: number;
  #pressure: number;

  constructor(weatherData: WeatherData) {
    this.#weatherData = weatherData;

    const initValue = this.#weatherData.registerObserver(this);
    const { temperature, humidity, pressure } = initValue;

    this.#temperature = temperature;
    this.#humidity = humidity;
    this.#pressure = pressure;
  }

  leave(): void {
    this.#weatherData.removeObserver(this);
  }

  get temperature(): number {
    return this.#temperature;
  }

  get humidity(): number {
    return this.#humidity;
  }

  get pressure(): number {
    return this.#pressure;
  }

  update({ temperature, humidity, pressure }: WeatherDataType): void {
    this.#temperature = temperature;
    this.#humidity = humidity;
    this.#pressure = pressure;
    // this.display();
  }

  display(): string {
    return "설정된 표현 방식이 없습니다.";
  }
}

export default Display;
