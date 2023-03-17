import { Button, Tooltip } from '@/components';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => (
  <Tooltip {...args}>
    <Button>Hover Me</Button>
  </Tooltip>
);

export const Default = Template.bind({});
Default.args = { content: 'Tooltip' };
