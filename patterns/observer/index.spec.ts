import { expect } from "chai";

import WeatherData from "./WeatherData";

import CurrentConditionDisplay from "./CurrentConditionDisplay";
import StatisticDisplay from "./StatisticDisplay";
import ForecastDisplay from "./ForecastDisplay";

import * as utils from "./index.utils";

describe("기상 현황 공유 옵저버 패턴", function () {
  let currentObserverCount = 0;
  const { temperatureGenerator, humidityGenerator, pressureGenerator } = utils;

  const temperature = temperatureGenerator(25);
  const humidity = humidityGenerator();
  const pressure = pressureGenerator();

  const weatherData = new WeatherData(temperature, humidity, pressure);

  it("날씨 데이터 초기값 확인", function () {
    expect(weatherData.observersCount).to.equal(currentObserverCount);
    expect(weatherData.temperature).to.equal(temperature);
    expect(weatherData.humidity).to.equal(humidity);
    expect(weatherData.pressure).to.equal(pressure);
  });

  let currentConditionDisplay;
  let statisticDisplay;
  let forecastDisplay;

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

  it("날씨 데이터 갱신", function () {
    const temperature = temperatureGenerator(25);
    const humidity = humidityGenerator();
    const pressure = pressureGenerator();

    weatherData.setMeasurements(temperature, humidity, pressure);

    expect(weatherData.temperature).to.equal(temperature);
    expect(weatherData.humidity).to.equal(humidity);
    expect(weatherData.pressure).to.equal(pressure);
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

  it("날씨 중계기 제거", function () {
    weatherData.removeObserver(currentConditionDisplay);
    currentObserverCount--;
    expect(weatherData.observersCount).to.equal(currentObserverCount);
  });

  it("날씨 데이터 갱신", function () {
    const temperature = temperatureGenerator(25);
    const humidity = humidityGenerator();
    const pressure = pressureGenerator();

    weatherData.setMeasurements(temperature, humidity, pressure);

    expect(weatherData.temperature).to.equal(temperature);
    expect(weatherData.humidity).to.equal(humidity);
    expect(weatherData.pressure).to.equal(pressure);
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

  it("날씨 데이터 갱신", function () {
    const temperature = temperatureGenerator(25);
    const humidity = humidityGenerator();
    const pressure = pressureGenerator();

    weatherData.setMeasurements(temperature, humidity, pressure);

    expect(weatherData.temperature).to.equal(temperature);
    expect(weatherData.humidity).to.equal(humidity);
    expect(weatherData.pressure).to.equal(pressure);
  });
});
