import { CenterLayout } from '@/layouts';
import { NotFoundPage } from '@/pages';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Pages/NotFoundPage',
  component: NotFoundPage,
} as ComponentMeta<typeof NotFoundPage>;

const Template: ComponentStory<typeof NotFoundPage> = (args) => (
  <CenterLayout>
    <NotFoundPage />
  </CenterLayout>
);

export const Default = Template.bind({});
Default.args = {};
