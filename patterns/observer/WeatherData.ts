import Subject from "./interfaces/Subject";
import Observer from "./interfaces/Observer";

export type WeatherDataType = {
  temperature: number;
  humidity: number;
  pressure: number;
};

class WeatherData implements Subject<WeatherDataType> {
  #observers: Observer<WeatherDataType>[];
  #temperature: number;
  #humidity: number;
  #pressure: number;

  constructor({ temperature, humidity, pressure }: WeatherDataType) {
    this.#observers = [];
    this.#temperature = temperature;
    this.#humidity = humidity;
    this.#pressure = pressure;
  }

  registerObserver(observer): WeatherDataType {
    this.#observers.push(observer);

    return {
      temperature: this.temperature,
      humidity: this.humidity,
      pressure: this.pressure,
    };
  }

  removeObserver(observer) {
    // Todo: remove #observers
  }

  notiObservers() {
    for (let observer of this.#observers) {
      observer.update(this.data);
    }
  }

  get data(): WeatherDataType {
    return {
      temperature: this.temperature,
      humidity: this.humidity,
      pressure: this.pressure,
    };
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
