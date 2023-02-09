import { theme as proTheme } from '@chakra-ui/pro-theme';
import { baseTheme } from '@chakra-ui/theme';
import { extendTheme } from '@chakra-ui/theme-utils';

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
