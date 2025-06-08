import Badge from '@/components/ui/badge/Badge.vue';
import Button from '@/components/ui/button/Button.vue';
import Icon from '@/components/ui/icon/Icon.vue';
import type { Meta, StoryObj } from '@storybook/vue3-vite';

const meta: Meta<typeof Badge> = {
  title: 'UI/Badge',
  component: Badge,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args) => ({
    components: { Badge },
    setup() {
      return { args };
    },
    template: `
      <Badge v-bind="args">${args.default}</Badge>
    `,
  }),
  args: {
    default: `#007ABF`,
  },
};

export const BasisCustomColors: Story = {
  render: (args) => ({
    components: { Badge },
    setup() {
      return { args };
    },
    template: `
      <Badge v-bind="args">${args.default}</Badge>
    `,
  }),
  args: {
    class: 'bg-orange-400 text-red-800',
    default: `7`,
  },
};

export const BasisWithIcon: Story = {
  render: (args) => ({
    components: { Badge, Icon },
    setup() {
      return { args };
    },
    template: `
      <Badge v-bind="args">${args.default}</Badge>
    `,
  }),
  args: {
    class: 'bg-purple-400',
    default: `<Icon name="bluetooth" class="text-primary-foreground" />`,
  },
};

export const Floating: Story = {
  render: (args) => ({
    components: { Badge, Button },
    setup() {
      return { args };
    },
    template: `
      <Button> Button <Badge v-bind="args">${args.default}</Badge> </Button> 
    `,
  }),
  args: {
    class: 'bg-cyan-600 text-white',
    floating: true,
    default: `22`,
  },
};

export const FloatingIndicators: Story = {
  render: (args) => ({
    components: { Badge, Icon, Button },
    setup() {
      return { args };
    },
    template: `
      <Button round> <Icon name="notifications" size="sm" filled class="text-primary-foreground" /> <Badge v-bind="args">${args.default}</Badge> </Button> 
    `,
  }),
  args: {
    class: 'bg-pink-200 text-black',
    floating: true,
    default: ``,
  },
};

export const Transparent: Story = {
  render: (args) => ({
    components: { Badge, Button },
    setup() {
      return { args };
    },
    template: `
      <Button> Button <Badge v-bind="args">${args.default}</Badge> </Button> 
    `,
  }),
  args: {
    class: 'bg-yellow-600 text-white',
    floating: true,
    transparent: true,
    default: `22`,
  },
};

export const Aligned: Story = {
  render: (args) => ({
    components: { Badge },
    setup() {
      return { args };
    },
    template: `
      <div class="text-3xl">
        Text
        <Badge v-bind="args">${args.default}</Badge>
      </div>
    `,
  }),
  args: {
    class: 'bg-blue-600',
    align: 'top',
    default: `app v1.8.7`,
  },
};

export const Transparant: Story = {
  render: (args) => ({
    components: { Badge },
    setup() {
      return { args };
    },
    template: `
      <div class="text-3xl">
        Text
        <Badge v-bind="args">${args.default}</Badge>
      </div>
    `,
  }),
  args: {
    class: 'bg-orange-600',
    transparent: true,
    default: `app v1.8.7`,
  },
};

export const OutlineDesign: Story = {
  render: (args) => ({
    components: { Badge },
    setup() {
      return { args };
    },
    template: `
      <Badge v-bind="args">${args.default}</Badge>
    `,
  }),
  args: {
    class: 'text-blue-600',
    outline: true,
    default: `Outline`,
  },
};

export const Rounded: Story = {
  render: (args) => ({
    components: { Badge },
    setup() {
      return { args };
    },
    template: `
      <Badge v-bind="args">${args.default}</Badge>
    `,
  }),
  args: {
    class: 'bg-red-600',
    rounded: true,
    default: `Round`,
  },
};

export const Indicators: Story = {
  render: (args) => ({
    components: { Badge, Button },
    setup() {
      return { args };
    },
    template: `
      <div class="flex items-center gap-2">
        Status
        <Badge v-bind="args">${args.default}</Badge>
      </div>
    `,
  }),
  args: {
    class: 'bg-green-400',
    default: ``,
  },
};
