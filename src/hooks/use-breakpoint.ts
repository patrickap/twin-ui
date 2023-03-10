import { Breakpoint } from '@/configs';
import { useMediaQuery } from 'react-responsive';

const useBreakpoint = () => {
  const sm = useMediaQuery({ query: `(min-width: ${Breakpoint.SM})` });
  const md = useMediaQuery({ query: `(min-width: ${Breakpoint.MD})` });
  const lg = useMediaQuery({ query: `(min-width: ${Breakpoint.LG})` });
  const xl = useMediaQuery({ query: `(min-width: ${Breakpoint.XL})` });

  return { sm, md, lg, xl };
};

export { useBreakpoint };
