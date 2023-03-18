import { Button, Drawer } from '@/components';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Drawer',
  component: Drawer,
} as ComponentMeta<typeof Drawer>;

const Template: ComponentStory<typeof Drawer> = (args) => (
  <Drawer trigger={<Button>Open Drawer</Button>} {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const Left = Template.bind({});
Left.args = { position: 'left' };

export const Right = Template.bind({});
Right.args = { position: 'right' };
