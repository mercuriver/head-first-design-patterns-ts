import { expect } from "chai";

import WeatherData from "./WeatherData";

import weatherMockData from "./index.meta";

let seq = 1;
describe(`[${seq++}] 초기`, function () {
  const {
    temperature: [t],
    humidity: [h],
    pressure: [p],
  } = weatherMockData;

  const weatherData = new WeatherData(t, h, p);

  it("날씨 데이터 초기값 확인", function () {
    expect(weatherData.observersCount).to.equal(0);
    expect(weatherData.temperature).to.equal(t);
    expect(weatherData.humidity).to.equal(h);
    expect(weatherData.pressure).to.equal(p);
  });
});
