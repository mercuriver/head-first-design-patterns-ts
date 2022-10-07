import Display from "./Display";
import { displayTemplate } from "./index.meta";
class ForecastDisplay extends Display {
  prevTemp: number;
  isPositive: boolean;

  constructor(weatherData) {
    super(weatherData);
    this.isPositive = true;
    this.prevTemp = -Infinity;
  }

  update(temp: number, humidity: number, pressure: number): void {
    super.update(temp, humidity, pressure);
    this.isPositive = this.prevTemp < temp;
    this.prevTemp = temp;
  }

  display(): string {
    const message = this.isPositive
      ? displayTemplate.posiviteForecast
      : displayTemplate.negativeForecast;
    console.log(message);
    return message;
  }
}

export default ForecastDisplay;
