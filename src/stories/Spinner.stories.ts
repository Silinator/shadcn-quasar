import Spinner from '@/components/ui/spinner/Spinner.vue';
import type { Meta, StoryObj } from '@storybook/vue3-vite';

const meta: Meta<typeof Spinner> = {
  title: 'UI/Spinner',
  component: Spinner,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args) => ({
    components: { Spinner },
    setup() {
      return { args };
    },
    template: `
      <Spinner v-bind="args"></Spinner>
    `,
  }),
  args: {
    size: 'md',
  },
};

export const Size: Story = {
  render: (args) => ({
    components: { Spinner },
    setup() {
      return { args };
    },
    template: `
      <Spinner v-bind="args"></Spinner>
    `,
  }),
  args: {
    size: 'xl',
  },
};

export const Thickness: Story = {
  render: (args) => ({
    components: { Spinner },
    setup() {
      return { args };
    },
    template: `
      <Spinner v-bind="args"></Spinner>
    `,
  }),
  args: {
    thickness: 3,
  },
};

export const Color: Story = {
  render: (args) => ({
    components: { Spinner },
    setup() {
      return { args };
    },
    template: `
      <Spinner v-bind="args"></Spinner>
    `,
  }),
  args: {
    class: 'text-red-500',
  },
};
