import { useMatches } from 'react-router-dom';

type RouteTitle = { title?: string };

const useRouteTitle = () => {
  const matches = useMatches();
  const match = matches.find((match) => !!(match.handle as RouteTitle)?.title);
  const title = (match?.handle as RouteTitle)?.title;

  return { title };
};

export { useRouteTitle };
export type { RouteTitle };
