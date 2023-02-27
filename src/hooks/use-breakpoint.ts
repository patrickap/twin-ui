import { breakpoints } from '@/theme';
import { useMediaQuery } from 'react-responsive';

const useBreakpoint = () => {
  const sm = useMediaQuery({ query: `(min-width: ${breakpoints.sm})` });
  const md = useMediaQuery({ query: `(min-width: ${breakpoints.md})` });
  const lg = useMediaQuery({ query: `(min-width: ${breakpoints.lg})` });
  const xl = useMediaQuery({ query: `(min-width: ${breakpoints.xl})` });

  return { sm, md, lg, xl };
};

export { useBreakpoint };
