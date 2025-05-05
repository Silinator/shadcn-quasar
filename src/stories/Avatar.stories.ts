import Avatar from '@/components/ui/avatar/Avatar.vue';
import Icon from '@/components/ui/icon/Icon.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

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

export const WithImg: Story = {
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
    default: `<img src="https://cdn.quasar.dev/img/avatar.png" />`,
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
