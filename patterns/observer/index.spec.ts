import { expect } from "chai";

import WeatherData from "./WeatherData";

import CurrentConditionDisplay from "./CurrentConditionDisplay";
import StatisticDisplay from "./StatisticDisplay";
import ForecastDisplay from "./ForecastDisplay";

import * as utils from "./index.utils";
import { displayTemplate } from "./index.meta";
const { currentCodition, statistic, posiviteForecast, negativeForecast } =
  displayTemplate;

const printWithValues =
  (temp: number, humidity: number, pressure: number) => (template) =>
    utils.printf(
      template,
      temp.toString(),
      humidity.toString(),
      pressure.toString()
    );

describe("util 테스트", function () {
  const { printf } = utils;
  expect(printf("%0 %1 %2")).to.equal("");
  expect(printf("%0 %1 %2", "A", "B", "C")).to.equal("A B C");
  expect(printf("%0 %1 %1", "A", "B", "C")).to.equal("A B B");
  expect(printf("%2 %2 %1", "A", "B", "C")).to.equal("C C B");
});

describe("기상 현황 공유 옵저버 패턴", function () {
  let currentObserverCount = 0;

  const firstTemp = 27;
  const secondTemp = 25;
  let humidity = 65;
  let pressure = 1000;

  let currentConditionDisplay;
  let statisticDisplay;
  let forecastDisplay;

  const weatherData = new WeatherData(firstTemp, humidity, pressure);

  it("날씨 데이터 초기값 확인", function () {
    expect(weatherData.observersCount).to.equal(currentObserverCount);
    expect(weatherData.temperature).to.equal(firstTemp);
    expect(weatherData.humidity).to.equal(humidity);
    expect(weatherData.pressure).to.equal(pressure);
  });

  it("날씨 중계기 연결(옵저버)", function () {
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

  it("날씨 중계기 값 확인", function () {
    expect(currentConditionDisplay.display()).to.equal(
      printWithValues(firstTemp, humidity, pressure)(currentCodition)
    );
    expect(statisticDisplay.display()).to.equal(
      printWithValues(firstTemp, firstTemp, firstTemp)(statistic)
    );
    expect(forecastDisplay.display()).to.equal(posiviteForecast);
  });

  weatherData.setMeasurements(secondTemp, humidity, pressure);

  it("날씨 데이터 갱신: 날씨 추워짐", function () {
    expect(weatherData.temperature).to.equal(secondTemp);
    expect(weatherData.humidity).to.equal(humidity);
    expect(weatherData.pressure).to.equal(pressure);
  });

  it("날씨 중계기 값 확인", function () {
    const printer = printWithValues(secondTemp, humidity, pressure);
    expect(currentConditionDisplay.display()).to.equal(
      printer(currentCodition)
    );
    expect(statisticDisplay.display()).to.equal(
      printWithValues(secondTemp, firstTemp, secondTemp)(statistic)
    );
    expect(forecastDisplay.display()).to.equal(negativeForecast);
  });

  it("날씨 중계기 제거", function () {
    weatherData.removeObserver(currentConditionDisplay);
    currentObserverCount--;
    expect(weatherData.observersCount).to.equal(currentObserverCount);
  });

  it("날씨 중계기 값 확인", function () {
    expect(currentConditionDisplay.display).to.equal(
      "currentConditionDisplay: Formatted message"
    );
    expect(statisticDisplay.display).to.equal(
      "statisticDisplay: Formatted message"
    );
    expect(forecastDisplay.display).to.equal(
      "forecastDisplay: Formatted message"
    );
  });

  it("날씨 중계기 제거 중복 요청", function () {
    weatherData.removeObserver(currentConditionDisplay);
    expect(weatherData.observersCount).to.equal(currentObserverCount);
  });

  it("날씨 중계기 제거", function () {
    weatherData.removeObserver(statisticDisplay);
    currentObserverCount--;
    expect(weatherData.observersCount).to.equal(currentObserverCount);
    weatherData.removeObserver(forecastDisplay);
    currentObserverCount--;
    expect(weatherData.observersCount).to.equal(currentObserverCount);
  });
});
