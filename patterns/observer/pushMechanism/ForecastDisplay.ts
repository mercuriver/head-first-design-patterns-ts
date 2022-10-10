import Display from "./Display";
import { displayTemplate } from "../index.meta";
class ForecastDisplay extends Display {
  temperatureGap: number;

  constructor(weatherData) {
    super(weatherData);
    this.temperatureGap = 0;
  }

  update(data): void {
    const { temperature } = data;
    this.temperatureGap =
      this.temperature !== undefined ? temperature - this.temperature : 0;
    super.update(data);
  }

  getForecastMessage(): string {
    if (this.temperatureGap !== 0) {
      return this.temperatureGap > 0
        ? displayTemplate.posiviteForecast
        : displayTemplate.negativeForecast;
    }
    return displayTemplate.defaultForecast;
  }

  setDisplay(): void {
    this.message = this.getForecastMessage();
  }
}

export default ForecastDisplay;
