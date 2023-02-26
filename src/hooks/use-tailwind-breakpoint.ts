import { useMediaQuery } from 'react-responsive';

// TODO: global single source of truth for breakpoints (this hook and tailwind config)

// provides tailwind default breakpoints
const useTailwindBreakpoint = () => {
  const isSm = useMediaQuery({ query: '(min-width: 640px)' });
  const isMd = useMediaQuery({ query: '(min-width: 768px)' });
  const isLg = useMediaQuery({ query: '(min-width: 1024px)' });
  const isXl = useMediaQuery({ query: '(min-width: 1280px)' });
  const is2Xl = useMediaQuery({ query: '(min-width: 1536px)' });

  return { isSm, isMd, isLg, isXl, is2Xl };
};

export { useTailwindBreakpoint };
