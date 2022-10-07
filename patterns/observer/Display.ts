import Observer from "./interfaces/Observer";
import DisplayElement from "./interfaces/DisplayElement";
import WeatherData from "./WeatherData";

abstract class Display implements Observer, DisplayElement {
  #weatherData: WeatherData;
  #temperature: number;
  #humidity: number;
  #pressure: number;

  constructor(weatherData: WeatherData) {
    this.#weatherData = weatherData;
    this.#weatherData.registerObserver(this);
  }

  leave(): void {
    this.#weatherData.removeObserver(this);
  }

  get temperature(): string {
    return this.#temperature.toString();
  }

  get humidity(): string {
    return this.#humidity.toString();
  }

  get pressure(): string {
    return this.#pressure.toString();
  }

  update(temp: number, humidity: number, pressure: number): void {
    this.#temperature = temp;
    this.#humidity = humidity;
    this.#pressure = pressure;
    this.display();
  }

  display(): string {
    return "설정된 표현 방식이 없습니다.";
  }
}

export default Display;
