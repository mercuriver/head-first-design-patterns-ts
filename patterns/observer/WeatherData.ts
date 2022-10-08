import Subject from "./interfaces/Subject";
import Observer from "./interfaces/Observer";

class WeatherData implements Subject {
  #observers: Observer[];
export type WeatherDataType = {
  temperature: number;
  humidity: number;
  pressure: number;
};
  #temperature: number;
  #humidity: number;
  #pressure: number;

  constructor({ temperature, humidity, pressure }: WeatherDataType) {
    this.#observers = [];
    this.#temperature = temperature;
    this.#humidity = humidity;
    this.#pressure = pressure;
  }

  registerObserver(observer) {
    this.#observers.push(observer);

    // observer.update(this.#temperature, this.#humidity, this.#pressure);
  }

  removeObserver(observer) {
    // Todo: remove #observers
  }

  notiObservers() {
    // Todo: #observers.each.update
  }

  get observersCount() {
    return this.#observers.length;
  }

  get temperature() {
    return this.#temperature;
  }

  get humidity() {
    return this.#humidity;
  }

  get pressure() {
    return this.#pressure;
  }

  #MeasurementChanged() {
    this.notiObservers();
  }

  setMeasurements({ temperature, humidity, pressure }: WeatherDataType) {
    this.#temperature = temperature;
    this.#humidity = humidity;
    this.#pressure = pressure;
    this.#MeasurementChanged();
  }
}

export default WeatherData;
