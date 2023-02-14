import { theme as proTheme } from '@chakra-ui/pro-theme';
import { extendTheme } from '@chakra-ui/react';
import { colors } from './colors';
import { components } from './components';

const chakraTheme = extendTheme(
  {
    colors: {
      ...colors,
    },
    components: {
      ...components,
    },
  },
  proTheme,
);

export { chakraTheme };
