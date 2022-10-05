import Subject from "./interfaces/Subject";
import Observer from "./interfaces/Observer";

class WeatherData implements Subject {
  #observers: Observer[];
  #temperature: number;
  #humidity: number;
  #pressure: number;

  constructor(temp: number, humidity: number, pressure: number) {
    this.#observers = [];
    this.#temperature = temp;
    this.#humidity = humidity;
    this.#pressure = pressure;
  }

  registerObserver(observer) {
    this.#observers.push(observer);
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

  setMeasurements(temp: number, humidity: number, pressure: number) {
    this.#temperature = temp;
    this.#humidity = humidity;
    this.#pressure = pressure;
    this.#MeasurementChanged();
  }
}

export default WeatherData;
