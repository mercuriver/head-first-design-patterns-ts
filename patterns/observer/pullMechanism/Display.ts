import PullMechanismObserver from "../interfaces/PullMechanismObserver";
import DisplayElement from "../interfaces/DisplayElement";
import WeatherData, { WeatherDataType } from "./WeatherData";

abstract class Display implements PullMechanismObserver, DisplayElement {
  #weatherData: WeatherData;
  #temperature: number;

  constructor(weatherData: WeatherData) {
    this.#weatherData = weatherData;
    this.#weatherData.registerObserver(this);
  }

  leave(): void {
    this.#weatherData.removeObserver(this);
  }
  update() {
    // 모든 Display에서 사용할 공동 동작이 있다면 이 함수에서 처리
    this.#temperature = this.#weatherData.temperature;
    // Test 환경이 아닌 실제 환경에서 메시지 출력이 필요할 경우, update 후 display가 호출되도록 유도
  }
  display(): string {
    return "설정된 표현 방식이 없습니다.";
  }

  get weatherData(): WeatherData {
    return this.#weatherData;
  }
  get temperature(): number {
    return this.#temperature;
  }
}

export default Display;
