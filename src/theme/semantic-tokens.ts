const colorTints = [
  '50',
  '100',
  '200',
  '300',
  '400',
  '500',
  '600',
  '700',
  '800',
  '900',
];

const tokenColorMap = {
  primary: 'brand',
  info: 'blue',
  success: 'green',
  warning: 'yellow',
  error: 'red',
  neutral: 'gray',
};

const colors = Object.entries(tokenColorMap).reduce((acc, [token, color]) => {
  colorTints.forEach((tint, index) => {
    acc[`${token}.${tint}`] = {
      default: `${color}.${colorTints[colorTints.length - 1 - index]}`,
      _dark: `${color}.${tint}`,
    };
  });
  return acc;
}, {} as Record<string, { default: string; _dark: string }>);

const semanticTokens = {
  colors: {
    ...colors,
  },
};

export { semanticTokens };
