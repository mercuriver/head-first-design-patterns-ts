import Observer from "../interfaces/Observer";
import DisplayElement from "../interfaces/DisplayElement";
import WeatherData, { WeatherDataType } from "./WeatherData";
import { displayTemplate } from "../index.meta";

abstract class Display implements Observer<WeatherDataType>, DisplayElement {
  #weatherData: WeatherData;
  #temperature: number;
  #humidity: number;
  #pressure: number;
  #message: string;

  constructor(weatherData: WeatherData) {
    this.#weatherData = weatherData;
    this.#weatherData.registerObserver(this);
    this.#message = displayTemplate.defaultMessage;
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

  set message(value: string) {
    console.log(value);
    this.#message = value;
  }

  update({ temperature, humidity, pressure }: WeatherDataType): void {
    this.#temperature = temperature;
    this.#humidity = humidity;
    this.#pressure = pressure;
    this.setDisplay();
  }

  setDisplay(): void {}

  display(): string {
    return this.#message;
  }
}

export default Display;
