import { CenterLayout } from '@/layouts';
import { ErrorPage } from '@/pages';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Pages/Error',
  component: ErrorPage,
} as ComponentMeta<typeof ErrorPage>;

const Template: ComponentStory<typeof ErrorPage> = (args) => (
  <CenterLayout>
    <ErrorPage />
  </CenterLayout>
);

export const Default = Template.bind({});
Default.args = {};
