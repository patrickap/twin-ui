import { CenterLayout } from '@/layouts';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Layouts/Center',
  component: CenterLayout,
} as ComponentMeta<typeof CenterLayout>;

const Template: ComponentStory<typeof CenterLayout> = (args) => (
  <CenterLayout {...args}>This is centered</CenterLayout>
);

export const Default = Template.bind({});
Default.args = {};
