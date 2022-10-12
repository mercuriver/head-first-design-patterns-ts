import { expect } from "chai";

import WeatherData from "./WeatherData";
import CurrentConditionDisplay from "./CurrentConditionDisplay";
import StatisticDisplay from "./StatisticDisplay";
import ForecastDisplay from "./ForecastDisplay";

import { printWithValues } from "../index.utils";
import { displayTemplate } from "../index.meta";
const {
  defaultMessage,
  currentCodition,
  statistic,
  defaultForecast,
  posiviteForecast,
  negativeForecast,
} = displayTemplate;

describe(`[Pull 방식] 기상 현황 공유 옵저버 패턴`, function () {
  let seq = 1;
  let currentObserverCount = 0;

  const firstTemp = 27;
  const secondTemp = 25;
  let humidity = 65;
  let pressure = 1000;

  let currentConditionDisplay;
  let statisticDisplay;
  let forecastDisplay;

  const weatherData = new WeatherData({
    temperature: firstTemp,
    humidity,
    pressure,
  });

  it(`[${seq++}] 날씨 데이터 초기값 확인`, function () {
    expect(weatherData.observersCount).to.equal(currentObserverCount);
    expect(weatherData.temperature).to.eql(firstTemp);
    expect(weatherData.humidity).to.eql(humidity);
    expect(weatherData.pressure).to.eql(pressure);
  });

  it(`[${seq++}] 날씨 중계기 연결(옵저버)`, function () {
    currentConditionDisplay = new CurrentConditionDisplay(weatherData);
    currentObserverCount++;
    expect(weatherData.observersCount).to.equal(currentObserverCount);
    statisticDisplay = new StatisticDisplay(weatherData);
    currentObserverCount++;
    expect(weatherData.observersCount).to.equal(currentObserverCount);
    forecastDisplay = new ForecastDisplay(weatherData);
    currentObserverCount++;
    expect(weatherData.observersCount).to.equal(currentObserverCount);
  });

  it(`[${seq++}] 날씨 중계기 초기 값 확인`, function () {
    expect(currentConditionDisplay.display()).to.equal(defaultMessage);
    expect(statisticDisplay.display()).to.equal(defaultMessage);
    expect(forecastDisplay.display()).to.equal(defaultMessage);
  });

  it(`[${seq++}] 날씨 데이터 갱신: [최초 update 발생]`, function () {
    weatherData.setMeasurements({
      temperature: firstTemp,
      humidity,
      pressure,
    });
    expect(weatherData.temperature).to.eql(firstTemp);
    expect(weatherData.humidity).to.eql(humidity);
    expect(weatherData.pressure).to.eql(pressure);
  });

  it(`[${seq++}] 날씨 중계기 값 확인`, function () {
    expect(currentConditionDisplay.display()).to.equal(
      printWithValues(firstTemp, humidity, pressure)(currentCodition)
    );
    expect(statisticDisplay.display()).to.equal(
      printWithValues(firstTemp, firstTemp, firstTemp)(statistic)
    );
    expect(forecastDisplay.display()).to.equal(defaultForecast);
  });

  it(`[${seq++}] 날씨 데이터 갱신: [날씨 추워짐]`, function () {
    weatherData.setMeasurements({
      temperature: secondTemp,
      humidity,
      pressure,
    });
    expect(weatherData.temperature).to.eql(secondTemp);
    expect(weatherData.humidity).to.eql(humidity);
    expect(weatherData.pressure).to.eql(pressure);
  });

  const cache = printWithValues(
    secondTemp,
    humidity,
    pressure
  )(currentCodition);
  it(`[${seq++}] 날씨 중계기 값 확인: [날씨 추워짐]`, function () {
    expect(currentConditionDisplay.display()).to.equal(cache);
    expect(statisticDisplay.display()).to.equal(
      printWithValues(secondTemp, firstTemp, secondTemp)(statistic)
    );
    expect(forecastDisplay.display()).to.equal(negativeForecast);
  });

  it(`[${seq++}] 날씨 중계기 제거`, function () {
    weatherData.removeObserver(currentConditionDisplay);
    currentObserverCount--;
    expect(weatherData.observersCount).to.equal(currentObserverCount);
  });

  it(`[${seq++}] 날씨 데이터 갱신: [날씨 따듯해짐]`, function () {
    weatherData.setMeasurements({
      temperature: firstTemp,
      humidity,
      pressure,
    });
    expect(weatherData.temperature).to.eql(firstTemp);
    expect(weatherData.humidity).to.eql(humidity);
    expect(weatherData.pressure).to.eql(pressure);
  });

  it(`[${seq++}] 날씨 데이터 갱신: [날씨 따듯해짐]`, function () {
    expect(statisticDisplay.display()).to.equal(
      printWithValues(firstTemp, firstTemp, secondTemp)(statistic)
    );
    expect(forecastDisplay.display()).to.equal(posiviteForecast);
  });
  it(`[${seq++}] 날씨 중계기 값 확인: 삭제된 diplay엔 이전 값 출력`, function () {
    expect(currentConditionDisplay.display()).to.equal(cache);
  });

  it(`[${seq++}] 날씨 중계기 제거 중복 요청`, function () {
    weatherData.removeObserver(currentConditionDisplay);
    expect(weatherData.observersCount).to.equal(currentObserverCount);
  });

  it(`[${seq++}] 모든 날씨 중계기 제거 후 observersCount 0 확인`, function () {
    weatherData.removeObserver(statisticDisplay);
    weatherData.removeObserver(forecastDisplay);
    expect(weatherData.observersCount).to.equal(0);
  });
});
