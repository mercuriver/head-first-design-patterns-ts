import { expect } from "chai";

import WeatherData from "./pushMechanism/WeatherData";
import CurrentConditionDisplay from "./pushMechanism/CurrentConditionDisplay";
import StatisticDisplay from "./pushMechanism/StatisticDisplay";
import ForecastDisplay from "./pushMechanism/ForecastDisplay";

import PullWeatherData from "./pullMechanism/WeatherData";
import PullCurrentConditionDisplay from "./pullMechanism/CurrentConditionDisplay";
import PullStatisticDisplay from "./pullMechanism/StatisticDisplay";
import PullForecastDisplay from "./pullMechanism/ForecastDisplay";

import * as utils from "./index.utils";
import { displayTemplate } from "./index.meta";
const {
  currentCodition,
  statistic,
  defaultForecast,
  posiviteForecast,
  negativeForecast,
} = displayTemplate;

const printWithValues =
  (temp: number, humidity: number, pressure: number) => (template) =>
    utils.printf(
      template,
      temp.toString(),
      humidity.toString(),
      pressure.toString()
    );

describe(`util 테스트`, function () {
  const { printf } = utils;

  it(`문자열 포멧 함수 확인`, function () {
    expect(printf("%0 %1 %2")).to.equal("");
    expect(printf("%0 %1 %2", "A", "B", "C")).to.equal("A B C");
    expect(printf("%0 %1 %1", "A", "B", "C")).to.equal("A B B");
    expect(printf("%2 %2 %1", "A", "B", "C")).to.equal("C C B");
  });
});

describe(`[Push 방식] 기상 현황 공유 옵저버 패턴`, function () {
  let seq = 1;
  let currentObserverCount = 0;

  const firstTemp = 27;
  const secondTemp = 25;
  let humidity = 65;
  let pressure = 1000;

  const weatherDataProps = {
    temperature: firstTemp,
    humidity,
    pressure,
  };

  let currentConditionDisplay;
  let statisticDisplay;
  let forecastDisplay;

  const weatherData = new WeatherData(weatherDataProps);

  it(`[${seq++}] 날씨 데이터 초기값 확인`, function () {
    expect(weatherData.observersCount).to.equal(currentObserverCount);
    expect(weatherData.data).to.eql(weatherDataProps);
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
    weatherDataProps.temperature = secondTemp;
    weatherData.setMeasurements(weatherDataProps);
    expect(weatherData.data).to.eql(weatherDataProps);
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
    weatherDataProps.temperature = firstTemp;
    weatherData.setMeasurements(weatherDataProps);
    expect(weatherData.data).to.eql(weatherDataProps);
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

  const weatherData = new PullWeatherData({
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
    currentConditionDisplay = new PullCurrentConditionDisplay(weatherData);
    currentObserverCount++;
    expect(weatherData.observersCount).to.equal(currentObserverCount);
    statisticDisplay = new PullStatisticDisplay(weatherData);
    currentObserverCount++;
    expect(weatherData.observersCount).to.equal(currentObserverCount);
    forecastDisplay = new PullForecastDisplay(weatherData);
    currentObserverCount++;
    expect(weatherData.observersCount).to.equal(currentObserverCount);
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
