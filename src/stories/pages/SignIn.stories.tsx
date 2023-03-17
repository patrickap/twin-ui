import { CenterLayout } from '@/layouts';
import { SignInPage } from '@/pages';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Pages/SignIn',
  component: SignInPage,
} as ComponentMeta<typeof SignInPage>;

const Template: ComponentStory<typeof SignInPage> = (args) => (
  <CenterLayout>
    <SignInPage />
  </CenterLayout>
);

export const Default = Template.bind({});
Default.args = {};
