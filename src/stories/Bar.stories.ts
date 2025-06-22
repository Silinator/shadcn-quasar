import { Bar } from '@/components/ui/bar';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { Space } from '@/components/ui/space';
import type { Meta, StoryObj } from '@storybook/vue3-vite';

const meta: Meta<typeof Bar> = {
  title: 'UI/Bar',
  component: Bar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args) => ({
    components: { Bar, Button, Icon, Space },
    setup() {
      return { args };
    },
    template: `<Bar v-bind="args">${args.default}</Bar>`,
  }),
  args: {
    class: 'bg-primary text-primary-foreground',
    default: `
      <Button flat dense>
        <Icon name="nutrition" filled size="xs"/>
      </Button>
      <div class="font-bold">App</div>
      <div class="cursor-pointer">File</div>
      <div class="cursor-pointer">Edit</div>
      <div class="cursor-pointer">View</div>
      <div class="cursor-pointer">Window</div>
      <div class="cursor-pointer">Help</div>
      <Space />
      <Button dense flat>
        <Icon name="airplay" size="xs"/>
      </Button>
      <Button dense flat>
        <Icon name="battery_charging_full" filled size="xs"/>
      </Button>
      <Button dense flat>
        <Icon name="wifi" size="xs"/>
      </Button>
      <div>9:41</div>
      <Button dense flat>
        <Icon name="search" size="xs"/>
      </Button>
      <Button dense flat>
        <Icon name="list" size="xs"/>
      </Button>`,
  },
};

export const Dense: Story = {
  render: (args) => ({
    components: { Bar, Button, Icon, Space },
    setup() {
      return { args };
    },
    template: `<Bar v-bind="args">${args.default}</Bar>`,
  }),
  args: {
    dense: true,
    class: 'bg-teal-500 text-white',
    default: `
      <Icon name="signal_cellular_4_bar" sharp/>
      <div>mobi-net</div>
      <div>4G</div>
      <Icon name="wifi" sharp />
      <Space />
      <Icon name="near_me" filled />
      <div>100%</div>
      <Icon name="battery_android_full"/>
      `,
  },
};
