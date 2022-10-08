import Display from "./Display";
import { displayTemplate } from "./index.meta";
class ForecastDisplay extends Display {
  prevTemp: number;
  temperatureGap: number;

  constructor(weatherData) {
    super(weatherData);
    this.temperatureGap = 0;
    this.prevTemp = this.temperature;
  }

  update(data): void {
    const { temperature } = data;
    super.update(data);
    this.temperatureGap = this.prevTemp - temperature;
    this.prevTemp = temperature;
  }

  getForecastMessage(): string {
    if (this.temperatureGap !== 0) {
      return this.temperatureGap > 0
        ? displayTemplate.posiviteForecast
        : displayTemplate.negativeForecast;
    }
    return displayTemplate.defaultForecast;
  }

  display(): string {
    const message = this.getForecastMessage();
    console.log(message);
    return message;
  }
}

export default ForecastDisplay;
