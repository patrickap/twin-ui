import { theme as proTheme } from '@chakra-ui/pro-theme';
import { baseTheme, extendTheme } from '@chakra-ui/react';

const chakraTheme = extendTheme(
  {
    colors: {
      ...baseTheme.colors,
      brand: baseTheme.colors.teal,
    },
  },
  proTheme,
);

export { chakraTheme };
