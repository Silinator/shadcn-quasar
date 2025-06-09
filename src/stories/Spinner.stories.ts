import { Spinner } from '@/components/ui/spinner';
import type { Meta, StoryObj } from '@storybook/vue3-vite';

const meta: Meta<typeof Spinner> = {
  title: 'UI/Spinner',
  component: Spinner,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {
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
    class: '',
  },
};
