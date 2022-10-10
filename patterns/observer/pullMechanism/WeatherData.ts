import Subject from "../interfaces/Subject";
import PullMechanismObserver from "../interfaces/PullMechanismObserver";

export type WeatherDataType = {
  temperature: number;
  humidity: number;
  pressure: number;
};

class WeatherData implements Subject<WeatherDataType> {
  #observers: PullMechanismObserver[];
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
  }

  removeObserver(observer) {
    this.#observers = this.#observers.filter(
      (_observer) => _observer !== observer
    );
  }

  notiObservers() {
    for (let observer of this.#observers) {
      observer.update();
    }
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

  get observersCount() {
    return this.#observers.length;
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
