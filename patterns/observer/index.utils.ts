const temperatureGenerator = (current = 30) =>
  current + Math.floor(Math.random() * 10) - 5;

const humidityGenerator = () => Math.floor(Math.random() * 100);

const pressureGenerator = () => 913.25 + Math.random() * 200; // 단위: hPa

export { temperatureGenerator, humidityGenerator, pressureGenerator };
