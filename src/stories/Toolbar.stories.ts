import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { Space } from '@/components/ui/space';
import { Toolbar, ToolbarTitle } from '@/components/ui/toolbar';
import type { Meta, StoryObj } from '@storybook/vue3-vite';

const meta: Meta<typeof Toolbar> = {
  title: 'UI/Toolbar',
  component: Toolbar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args) => ({
    components: { Toolbar, ToolbarTitle, Button, Icon, Space },
    setup() {
      return { args };
    },
    template: `<Toolbar v-bind="args">${args.default}</Toolbar>`,
  }),
  args: {
    class: 'bg-primary text-primary-foreground',
    default: `
      <Button flat round dense>
        <Icon name="menu" size="sm"/>
      </Button>
      <ToolbarTitle>Toolbar Title</ToolbarTitle>
      <Space />
      <Button flat round dense>
        <Icon name="more_vert" size="sm"/>
      </Button>`,
  },
};

export const WithAvatar: Story = {
  render: (args) => ({
    components: { Toolbar, ToolbarTitle, Avatar, AvatarFallback, AvatarImage, Button, Icon, Space },
    setup() {
      return { args };
    },
    template: `<Toolbar v-bind="args">${args.default}</Toolbar>`,
  }),
  args: {
    class: 'bg-primary text-primary-foreground',
    default: `
      <Button flat round dense class="mr-2">
        <Icon name="menu" size="sm"/>
      </Button>
      <Avatar>
        <AvatarImage src="https://cdn.quasar.dev/img/avatar.png" />
        <AvatarFallback>J</AvatarFallback>
      </Avatar>
      <ToolbarTitle>Toolbar Title</ToolbarTitle>
      <Space />
      <Button flat round dense>
        <Icon name="more_vert" size="sm"/>
      </Button>`,
  },
};

export const WithLink: Story = {
  render: (args) => ({
    components: { Toolbar, ToolbarTitle, Button, Icon, Space },
    setup() {
      return { args };
    },
    template: `<Toolbar v-bind="args">${args.default}</Toolbar>`,
  }),
  args: {
    class: 'bg-blue-500 text-white',
    default: `
      <Button flat round dense>
        <Icon name="menu" size="sm"/>
      </Button>
      <ToolbarTitle>Link</ToolbarTitle>
      <Space />
      <Button flat stretch>Link</Button>
      <Button flat stretch>Link</Button>
      `,
  },
};

export const Inset: Story = {
  render: (args) => ({
    components: { Toolbar, ToolbarTitle, Button, Icon, Space },
    setup() {
      return { args };
    },
    template: `<Toolbar v-bind="args">${args.default}</Toolbar>`,
  }),
  args: {
    class: 'bg-yellow-500 text-white',
    default: `
      <Button flat round dense>
        <Icon name="menu" size="sm"/>
      </Button>
      <ToolbarTitle>Inset</ToolbarTitle>
      <Space />
      <Button flat stretch>Link</Button>
      <Button flat stretch>Link</Button>
      `,
    inset: true,
  },
};
