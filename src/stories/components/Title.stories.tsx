import { Title } from '@/components';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Title',
  component: Title,
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => (
  <Title {...args}>Heading {args.order}</Title>
);

export const Default = Template.bind({});
Default.args = {};

export const H1 = Template.bind({});
H1.args = { order: 1 };

export const H2 = Template.bind({});
H2.args = { order: 2 };

export const H3 = Template.bind({});
H3.args = { order: 3 };

export const H4 = Template.bind({});
H4.args = { order: 4 };

export const H5 = Template.bind({});
H5.args = { order: 5 };

export const H6 = Template.bind({});
H6.args = { order: 6 };
