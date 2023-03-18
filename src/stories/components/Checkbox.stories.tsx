import { Checkbox } from '@/components';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Checkbox
      {...args}
      isChecked={isChecked}
      onChange={(e) => setIsChecked(e.target.checked)}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  label: 'Checkbox',
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
