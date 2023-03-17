import { Checkbox } from '@/components';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: 'Checkbox',
};

export const Checked = Template.bind({});
Checked.args = {
  label: 'Checkbox',
  isChecked: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Checkbox',
  isDisabled: true,
};

export const Error = Template.bind({});
Error.args = {
  label: 'Checkbox',
  isError: true,
};
