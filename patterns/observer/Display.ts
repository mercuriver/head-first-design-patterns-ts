import Observer from "./interfaces/Observer";
import DisplayElement from "./interfaces/DisplayElement";
import WeatherData from "./WeatherData";

abstract class Display implements Observer, DisplayElement {
  constructor(weatherData: WeatherData) {}
  display(): void {}
  update(temp: number, humidity: number, pressure: number): void {}
}

export default Display;
