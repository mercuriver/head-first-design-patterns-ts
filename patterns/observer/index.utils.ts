const printf = (...args: string[]): string => {
  if (!args || args.length < 2) return "";
  const [template, ...values] = args;
  let message = template;
  values.forEach((value, index) => {
    message = message.split(`%${index}`).join(value);
  });
  return message;
};

export { printf };
