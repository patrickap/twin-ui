import { baseTheme, StyleFunctionProps } from '@chakra-ui/react';

const components = {
  ...baseTheme.components,
  Link: {
    variants: {
      primary: (theme: StyleFunctionProps) => ({
        color: theme.colorMode === 'dark' ? 'brand.200' : 'brand.600',
        _hover: {
          textDecoration: 'none',
          color: theme.colorMode === 'dark' ? 'brand.300' : 'brand.700',
        },
      }),
    },
    defaultProps: {
      variant: 'primary',
    },
  },
};

export { components };
