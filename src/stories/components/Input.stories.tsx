import { Input, InputPassword } from '@/components';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';

export default {
  title: 'Components/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => {
  const [value, setValue] = useState('');

  const Component = args.type === 'password' ? InputPassword : Input;

  return (
    <div className='max-w-sm'>
      <Component
        label='Input'
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};

export const Text = Template.bind({});
Text.args = {
  type: 'text',
};

export const Password = Template.bind({});
Password.args = {
  type: 'password',
};

export const Placeholder = Template.bind({});
Placeholder.args = { placeholder: 'Placeholder' };

export const Disabled = Template.bind({});
Disabled.args = { isDisabled: true };

export const Error = Template.bind({});
Error.args = { error: 'Required', isError: true };
