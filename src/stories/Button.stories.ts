import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon/Icon.vue';
import Spinner from '@/components/ui/spinner/Spinner.vue';
import type { Meta, StoryObj } from '@storybook/vue3-vite';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `
      <Button v-bind="args">${args.default}</Button>
    `,
  }),
  args: {
    class: '',
    default: `Standard`,
  },
};

export const CustomColor: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `
      <Button v-bind="args">${args.default}</Button>
    `,
  }),
  args: {
    class: 'bg-blue-500 text-white',
    default: `Standard`,
  },
};

export const WithIcon: Story = {
  render: (args) => ({
    components: { Button, Icon },
    setup() {
      return { args };
    },
    template: `
      <Button v-bind="args">${args.default}</Button>
    `,
  }),
  args: {
    class: 'bg-green-400 text-white',
    default: `<Icon name="shopping_cart" filled size="sm" /> Standard`,
  },
};

export const Round: Story = {
  render: (args) => ({
    components: { Button, Icon },
    setup() {
      return { args };
    },
    template: `
      <Button v-bind="args">${args.default}</Button>
    `,
  }),
  args: {
    class: 'bg-yellow-500 text-white',
    round: true,
    default: `<Icon name="shopping_cart" filled size="sm" />`,
  },
};

export const Rounded: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `
      <Button v-bind="args">${args.default}</Button>
    `,
  }),
  args: {
    class: 'bg-purple-500 text-white',
    rounded: true,
    default: `Rounded Button`,
  },
};

export const Square: Story = {
  render: (args) => ({
    components: { Button, Icon },
    setup() {
      return { args };
    },
    template: `
      <Button v-bind="args">${args.default}</Button>
    `,
  }),
  args: {
    class: 'bg-orange-500 text-white',
    square: true,
    default: `<Icon name="shopping_cart" filled size="sm" />`,
  },
};

export const Flat: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `
      <Button v-bind="args">${args.default}</Button>
    `,
  }),
  args: {
    class: '',
    flat: true,
    default: `Flat Button`,
  },
};

export const Outline: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `
      <Button v-bind="args">${args.default}</Button>
    `,
  }),
  args: {
    class: '',
    outline: true,
    default: `Outline Button`,
  },
};

export const OutlineRounded: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `
      <Button v-bind="args">${args.default}</Button>
    `,
  }),
  args: {
    class: '',
    outline: true,
    rounded: true,
    default: `Outline rounded Button`,
  },
};

export const Push: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `
      <Button v-bind="args">${args.default}</Button>
    `,
  }),
  args: {
    class: 'bg-cyan-500 text-white',
    push: true,
    default: `Push Button`,
  },
};

export const Unelevated: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `
      <Button v-bind="args">${args.default}</Button>
    `,
  }),
  args: {
    class: '',
    unelevated: true,
    default: `Unelevated Button`,
  },
};

export const Dense: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `
      <Button v-bind="args">${args.default}</Button>
    `,
  }),
  args: {
    class: '',
    dense: true,
    default: `Dense Button`,
  },
};

export const NoCaps: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `
      <Button v-bind="args">${args.default}</Button>
    `,
  }),
  args: {
    class: '',
    noCaps: true,
    default: `NoCaps Button`,
  },
};

export const Glossy: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `
      <Button v-bind="args">${args.default}</Button>
    `,
  }),
  args: {
    class: 'bg-green-500',
    glossy: true,
    default: `Glossy Button`,
  },
};

export const Sizes: Story = {
  render: (args) => ({
    components: { Button, Icon },
    setup() {
      return { args };
    },
    template: `
      <div class="flex flex-row items-center gap-2">
        <Button v-bind="args">${args.default}</Button>
        <Button v-bind="args" size="sm">${args.default}</Button>
        <Button v-bind="args" size="md">${args.default}</Button>
        <Button v-bind="args" size="lg">${args.default}</Button>
        <Button v-bind="args" size="xl">${args.default}</Button>
      </div>
    `,
  }),
  args: {
    class: 'bg-lime-400 text-black',
    size: 'xs',
    default: `<Icon name="search" /> Button`,
  },
};

export const CustomSize: Story = {
  render: (args) => ({
    components: { Button, Icon },
    setup() {
      return { args };
    },
    template: `
      <Button v-bind="args">${args.default}</Button>
    `,
  }),
  args: {
    class: 'bg-lime-400 text-black text-6xl',
    size: 'xs',
    default: `<Icon name="search" /> Button`,
  },
};

export const Disable: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `
      <Button v-bind="args">${args.default}</Button>
    `,
  }),
  args: {
    class: 'bg-red-500',
    disable: true,
    default: `Disable Button`,
  },
};

export const LoadingWithSpinner: Story = {
  render: (args) => ({
    components: { Button, Spinner },
    setup() {
      return { args };
    },
    template: `
      <Button v-bind="args">${args.default}</Button>
    `,
  }),
  args: {
    class: 'bg-indigo-500',
    loading: true,
    default: `<Spinner size="sm"></Spinner> Loading Button`,
  },
};

export const Alignment: Story = {
  render: (args) => ({
    components: { Button, Icon },
    setup() {
      return { args };
    },
    template: `
      <div class="flex flex-row flex-wrap items-center gap-2">
        <Button v-bind="args">${args.default}</Button>
        <Button v-bind="args" align='left'>${args.default}</Button>
        <Button v-bind="args" align='between'>${args.default}</Button>
        <Button v-bind="args" align='around'>${args.default}</Button>
      </div>
    `,
  }),
  args: {
    class: 'bg-pink-500 w-56',
    align: 'right',
    default: `<Icon name="bolt" /> Alignment Button`,
  },
};
