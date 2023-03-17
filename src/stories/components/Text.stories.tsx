import { Text } from '@/components';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Text',
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => (
  <Text {...args}>
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
    eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
    voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
    clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
    amet. <br /> <br />
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
    eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
    voluptua. <br /> <br />
    At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
    gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
    ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
    tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
  </Text>
);

export const Default = Template.bind({});
Default.args = {};

export const Primary = Template.bind({});
Primary.args = { color: 'primary' };

export const Neutral = Template.bind({});
Neutral.args = { color: 'neutral' };

export const Info = Template.bind({});
Info.args = { color: 'info' };

export const Warning = Template.bind({});
Warning.args = { color: 'warning' };

export const Error = Template.bind({});
Error.args = { color: 'error' };

export const Success = Template.bind({});
Success.args = { color: 'success' };
