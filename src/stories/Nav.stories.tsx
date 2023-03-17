import { Nav, NavItem } from '@/components';
import { HomeIcon } from '@heroicons/react/24/outline';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';

export default {
  title: 'Components/Nav',
  component: Nav,
} as ComponentMeta<typeof Nav>;

const TemplateNav: ComponentStory<typeof Nav> = (args) => {
  const [active, setActive] = useState(0);

  return (
    <div className='max-w-sm'>
      <Nav {...args}>
        {[1, 2, 3, 4, 5].map((item) => {
          return (
            <NavItem
              icon={<HomeIcon />}
              isActive={item === active}
              onClick={() => setActive(item)}
            >
              Item {item}
            </NavItem>
          );
        })}
      </Nav>
    </div>
  );
};

const TemplateNavIcon: ComponentStory<typeof Nav> = (args) => {
  const [active, setActive] = useState(0);

  return (
    <div className='max-w-sm'>
      <Nav {...args}>
        {[1, 2, 3, 4, 5].map((item) => {
          return (
            <NavItem
              icon={<HomeIcon />}
              isActive={item === active}
              onClick={() => setActive(item)}
            ></NavItem>
          );
        })}
      </Nav>
    </div>
  );
};

export const Default = TemplateNav.bind({});
Default.args = {};

export const Icon = TemplateNavIcon.bind({});
Icon.args = {};
