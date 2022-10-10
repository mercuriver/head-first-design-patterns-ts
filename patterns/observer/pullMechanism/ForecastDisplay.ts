import Display from "./Display";
import { displayTemplate } from "../index.meta";
class ForecastDisplay extends Display {
  temperatureGap: number;

  constructor(weatherData) {
    super(weatherData);
    this.temperatureGap = 0;
  }

  update() {
    const temperature = this.weatherData.temperature;
    this.temperatureGap = this.temperature - temperature;
    super.update();
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
