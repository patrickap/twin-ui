import { Link } from '@/components';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Link',
  component: Link,
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args}></Link>;

export const Default = Template.bind({});
Default.args = { href: '', children: 'Link' };
