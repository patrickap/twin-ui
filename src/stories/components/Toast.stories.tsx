import { Button, Toast, Toasts } from '@/components';
import { useToast } from '@/hooks';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Toast',
  component: Toast,
} as ComponentMeta<typeof Toast>;

const Template: ComponentStory<typeof Toast> = (args) => {
  const toast = useToast();

  return (
    <>
      <Button
        onClick={() =>
          toast.add({
            title: 'Toast',
            description:
              'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
            ...args,
          })
        }
      >
        Add Toast
      </Button>
      <Toasts />
    </>
  );
};

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
