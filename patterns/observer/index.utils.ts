const printf = (...args: string[]): string => {
  if (!args || args.length < 2) return "";
  const [template, ...values] = args;
  let message = template;
  values.forEach((value, index) => {
    message = message.split(`%${index}`).join(value);
  });
  return message;
};

const printWithValues =
  (temp: number, humidity: number, pressure: number) => (template) =>
    printf(template, temp.toString(), humidity.toString(), pressure.toString());

export { printf, printWithValues };
