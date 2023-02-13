import { theme as proTheme } from '@chakra-ui/pro-theme';
import { baseTheme, extendTheme } from '@chakra-ui/react';

const chakraTheme = extendTheme(
  {
    colors: {
      ...baseTheme.colors,
      brand: baseTheme.colors.teal,
    },
    components: {
      Link: {
        variants: {
          primary: (theme: any) => ({
            color: theme.colorMode === 'dark' ? 'brand.300' : 'brand.700',
          }),
        },
        defaultProps: {
          variant: 'primary',
        },
      },
    },
  },
  proTheme,
);

export { chakraTheme };
