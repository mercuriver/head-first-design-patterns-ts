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
    this.temperatureGap = temperature - this.prevTemp;
    this.prevTemp = temperature;
    // Todo: super.update 내부에서 display를 호출하기 때문에, 클래스 내부 변수 값 갱신 시 주의해야 함. 코드 개선 필요
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

  display(): string {
    const message = this.getForecastMessage();
    console.log(message);
    return message;
  }
}

export default ForecastDisplay;
