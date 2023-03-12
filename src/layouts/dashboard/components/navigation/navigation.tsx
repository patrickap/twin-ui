import { Nav, NavItem, Tooltip } from '@/components';
import { useBreakpoint } from '@/hooks';
import {
  DocumentDuplicateIcon,
  PaperClipIcon,
} from '@heroicons/react/24/outline';

type NavigationProps = {
  onNavigate?: (path: string) => void;
};

const Navigation = ({ onNavigate }: NavigationProps) => {
  const { md, lg } = useBreakpoint();
  const items = [
    {
      path: '/user/files',
      name: 'Files',
      icon: <DocumentDuplicateIcon />,
    },
    {
      path: '/user/shares',
      name: 'Shares',
      icon: <PaperClipIcon />,
    },
  ];

  return (
    <Nav>
      {items.map((item, i) => (
        <div key={i}>
          <span
            className='md:flex md:justify-center lg:inline-block lg:w-full'
            onClick={() => onNavigate?.(item.path)}
          >
            {!md || lg ? (
              <NavItem to={item.path} icon={item.icon}>
                {item.name}
              </NavItem>
            ) : (
              <Tooltip position='right' content={item.name}>
                <NavItem to={item.path} icon={item.icon}></NavItem>
              </Tooltip>
            )}
          </span>
        </div>
      ))}
    </Nav>
  );
};

export { Navigation };
export type { NavigationProps };
