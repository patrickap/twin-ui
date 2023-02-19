import { theme as proTheme } from '@chakra-ui/pro-theme';
import { extendTheme } from '@chakra-ui/react';
import { colors } from './colors';
import { components } from './components';
import { semanticTokens } from './semantic-tokens';

const chakraTheme = extendTheme(
  {
    colors,
    components,
    semanticTokens,
  },
  proTheme,
);

export { chakraTheme };
