import { Input, InputPassword, InputText } from '@/components';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';

export default {
  title: 'Components/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const TemplateInput: ComponentStory<typeof Input> = (args) => {
  const [value, setValue] = useState('');

  return (
    <div className='max-w-sm'>
      <Input
        label='Input'
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

const TemplateInputText: ComponentStory<typeof InputText> = (args) => {
  const [value, setValue] = useState('');

  return (
    <div className='max-w-sm'>
      <InputText
        label='Input'
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

const TemplateInputPassword: ComponentStory<typeof InputPassword> = (args) => {
  const [value, setValue] = useState('');

  return (
    <div className='max-w-sm'>
      <InputPassword
        label='Input'
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export const Default = TemplateInput.bind({});
Default.args = {};

export const Placeholder = TemplateInput.bind({});
Placeholder.args = { placeholder: 'Placeholder' };

export const Text = TemplateInputText.bind({});
Text.args = {};

export const Password = TemplateInputPassword.bind({});
Password.args = {};

export const Disabled = TemplateInput.bind({});
Disabled.args = { isDisabled: true };

export const Error = TemplateInput.bind({});
Error.args = { error: 'Required', isError: true };
