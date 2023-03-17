import { Button } from '@/components';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Button</Button>
);

export const Default = Template.bind({});
Default.args = {};

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
};

export const Neutral = Template.bind({});
Neutral.args = {
  color: 'neutral',
};

export const Info = Template.bind({});
Info.args = {
  color: 'info',
};

export const Warning = Template.bind({});
Warning.args = {
  color: 'warning',
};

export const Error = Template.bind({});
Error.args = {
  color: 'error',
};

export const Success = Template.bind({});
Success.args = {
  color: 'success',
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  isDisabled: true,
};
