import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Badge from '@/components/ui/badge/Badge.vue';
import Icon from '@/components/ui/icon/Icon.vue';
import type { Meta, StoryObj } from '@storybook/vue3-vite';

const meta: Meta<typeof Avatar> = {
  title: 'UI/Avatar',
  component: Avatar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args) => ({
    components: { Avatar },
    setup() {
      return { args };
    },
    template: `<Avatar v-bind="args">${args.default}</Avatar>`,
  }),
  args: {
    default: `J`,
  },
};

export const BasisCustomColors: Story = {
  render: (args) => ({
    components: { Avatar },
    setup() {
      return { args };
    },
    template: `<Avatar v-bind="args">${args.default}</Avatar>`,
  }),
  args: {
    class: 'bg-blue-500 text-white',
    default: `J`,
  },
};

export const Rounded: Story = {
  render: (args) => ({
    components: { Avatar },
    setup() {
      return { args };
    },
    template: `<Avatar v-bind="args">${args.default}</Avatar>`,
  }),
  args: {
    rounded: true,
    default: `J`,
  },
};

export const Square: Story = {
  render: (args) => ({
    components: { Avatar },
    setup() {
      return { args };
    },
    template: `<Avatar v-bind="args">${args.default}</Avatar>`,
  }),
  args: {
    square: true,
    default: `J`,
  },
};

export const WithIcon: Story = {
  render: (args) => ({
    components: { Avatar, Icon },
    setup: () => ({ args }),
    template: `
      <Avatar v-bind="args">
        ${args.default}
      </Avatar>
    `,
  }),
  args: {
    class: 'bg-green-500',
    size: 'xl',
    default: `<Icon name="directions" filled size="md" class="text-primary-foreground" />`,
  },
};

export const WithBadge: Story = {
  render: (args) => ({
    components: { Avatar, Badge },
    setup: () => ({ args }),
    template: `
      <Avatar v-bind="args">
        ${args.default}
      </Avatar>
    `,
  }),
  args: {
    class: 'bg-green-500',
    size: 'xl',
    default: `
      J
      <Badge floating rounded class="bg-blue-600">2</Badge>
    `,
  },
};

export const WithIconAndBadge: Story = {
  render: (args) => ({
    components: { Avatar, Icon, Badge },
    setup: () => ({ args }),
    template: `
      <Avatar v-bind="args">
        ${args.default}
      </Avatar>
    `,
  }),
  args: {
    class: 'bg-orange-500',
    size: 'xl',
    square: true,
    default: `
      <Icon name="directions" filled size="md" class="text-primary-foreground" />
      <Badge floating rounded class="bg-green-500"></Badge>
    `,
  },
};

export const WithSimpleImg: Story = {
  render: (args) => ({
    components: { Avatar },
    setup: () => ({ args }),
    template: `
      <Avatar v-bind="args">
        ${args.default}
      </Avatar>
    `,
  }),
  args: {
    class: 'bg-green-500',
    size: 'xl',
    default: `<img src="https://cdn.quasar.dev/img/avatar.png" />`,
  },
};

export const WithImgFallback: Story = {
  render: (args) => ({
    components: { Avatar, AvatarFallback, AvatarImage },
    setup: () => ({ args }),
    template: `
      <Avatar v-bind="args">
        ${args.default}
      </Avatar>
    `,
  }),
  args: {
    class: 'bg-cyan-500',
    size: 'xl',
    default: `
      <AvatarImage src="https://cdn.quasar.dev/img/avatar-fail.png" />
      <AvatarFallback>J</AvatarFallback>
    `,
  },
};

export const WithImgFallbackAndBadge: Story = {
  render: (args) => ({
    components: { Avatar, AvatarFallback, AvatarImage, Badge },
    setup: () => ({ args }),
    template: `
      <Avatar v-bind="args">
        ${args.default}
      </Avatar>
    `,
  }),
  args: {
    class: 'bg-cyan-500',
    size: 'xl',
    default: `
      <AvatarImage src="https://cdn.quasar.dev/img/avatar.png" />
      <AvatarFallback>J</AvatarFallback>
      <Badge floating class="bg-red-600">99+</Badge>
    `,
  },
};

export const CustomSize: Story = {
  render: (args) => ({
    components: { Avatar, Icon },
    setup() {
      return { args };
    },
    template: `<Avatar v-bind="args">${args.default}</Avatar>`,
  }),
  args: {
    class: 'h-24 w-24 text-6xl',
    default: `<Icon name="directions" filled size="xl" class="text-primary-foreground" />`,
  },
};
