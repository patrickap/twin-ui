import { Button, Dialog, Dialogs } from '@/components';
import { useDialog } from '@/hooks';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Dialog',
  component: Dialog,
} as ComponentMeta<typeof Dialog>;

const Template: ComponentStory<typeof Dialog> = (args) => {
  const dialog = useDialog();

  return (
    <>
      <Button
        onClick={() =>
          dialog.open({
            title: 'Dialog',
            description:
              'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
            onCancel: () => {},
            onConfirm: () => {},
            ...args,
          })
        }
      >
        Open Dialog
      </Button>
      <Dialogs />
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
