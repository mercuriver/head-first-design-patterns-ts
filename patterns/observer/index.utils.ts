const temperatureGenerator = (current = 30) =>
  current + Math.floor(Math.random() * 10) - 5;

const humidityGenerator = () => Math.floor(Math.random() * 100);

const pressureGenerator = () => 913.25 + Math.random() * 200; // 단위: hPa

const printf = (...args: string[]): string => {
  if (!args || args.length < 2) return "";
  const [template, ...values] = args;
  let message = template;
  values.forEach((value, index) => {
    message = message.split(`%${index}`).join(value);
  });
  return message;
};

export { temperatureGenerator, humidityGenerator, pressureGenerator, printf };
