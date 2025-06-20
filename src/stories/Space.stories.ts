import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { Space } from '@/components/ui/space';
import { Toolbar } from '@/components/ui/toolbar';
import type { Meta, StoryObj } from '@storybook/vue3-vite';

const meta: Meta<typeof Toolbar> = {
  title: 'UI/Space',
  component: Space,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args) => ({
    components: { Toolbar, Button, Icon, Space },
    setup() {
      return { args };
    },
    template: `<Toolbar class="bg-primary text-primary-foreground">
      <Button flat round dense>
        <Icon name="menu" size="sm"/>
      </Button>
      <Space v-bind="args">${args.default}</Space>
      <Button flat round dense class="mr-2">
        <Icon name="apps" size="sm"/>
      </Button>
      <Button flat round dense>
        <Icon name="more_vert" size="sm"/>
      </Button>
    </Toolbar>`,
  }),
  args: {
    class: '',
    default: ``,
  },
};
