import { Button } from '@/components';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
  children: 'Button',
};

export const Neutral = Template.bind({});
Neutral.args = {
  color: 'neutral',
  children: 'Button',
};

export const Info = Template.bind({});
Info.args = {
  color: 'info',
  children: 'Button',
};

export const Warning = Template.bind({});
Warning.args = {
  color: 'warning',
  children: 'Button',
};

export const Error = Template.bind({});
Error.args = {
  color: 'error',
  children: 'Button',
};

export const Success = Template.bind({});
Success.args = {
  color: 'success',
  children: 'Button',
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
  children: 'Button',
};

export const Disabled = Template.bind({});
Disabled.args = {
  isDisabled: true,
  children: 'Button',
};
