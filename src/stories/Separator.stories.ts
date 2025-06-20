import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { Separator } from '@/components/ui/separator';
import { Space } from '@/components/ui/space';
import { Toolbar } from '@/components/ui/toolbar';
import type { Meta, StoryObj } from '@storybook/vue3-vite';

const meta: Meta<typeof Separator> = {
  title: 'UI/Separator',
  component: Separator,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args) => ({
    components: { Toolbar, Button, Icon, Space, Separator },
    setup() {
      return { args };
    },
    template: `<div class="bg-primary text-primary-foreground">
      Text
      <Separator v-bind="args">${args.default}</Separator>
      Text
    </div>`,
  }),
  args: {
    class: '',
    default: ``,
  },
};

export const Spaced: Story = {
  render: (args) => ({
    components: { Toolbar, Button, Icon, Space, Separator },
    setup() {
      return { args };
    },
    template: `<div class="bg-primary text-primary-foreground">
      Text
      <Separator v-bind="args">${args.default}</Separator>
      Text
    </div>`,
  }),
  args: {
    class: '',
    spaced: 'xl',
    default: ``,
  },
};

export const Inset: Story = {
  render: (args) => ({
    components: { Separator },
    setup() {
      return { args };
    },
    template: `<div class="bg-primary text-primary-foreground">
      Text
      <Separator v-bind="args">${args.default}</Separator>
      Text
    </div>`,
  }),
  args: {
    class: '',
    inset: true,
    default: ``,
  },
};

export const CustomColor: Story = {
  render: (args) => ({
    components: { Separator },
    setup() {
      return { args };
    },
    template: `<div class="bg-primary text-primary-foreground">
      Text
      <Separator v-bind="args">${args.default}</Separator>
      Text
    </div>`,
  }),
  args: {
    class: 'bg-cyan-500',
    default: ``,
  },
};

export const WithLabel: Story = {
  render: (args) => ({
    components: { Separator },
    setup() {
      return { args };
    },
    template: `<div class="bg-primary text-primary-foreground">
      Text
      <Separator v-bind="args">${args.default}</Separator>
      Text
    </div>`,
  }),
  args: {
    class: 'text-pink-500',
    default: `Label`,
  },
};

export const WithLabelInset: Story = {
  render: (args) => ({
    components: { Separator },
    setup() {
      return { args };
    },
    template: `<div class="bg-primary text-primary-foreground">
      Text
      <Separator v-bind="args">${args.default}</Separator>
      Text
    </div>`,
  }),
  args: {
    class: 'text-lime-500',
    inset: true,
    default: `Label`,
  },
};

export const Vertical: Story = {
  render: (args) => ({
    components: { Toolbar, Button, Icon, Space, Separator },
    setup() {
      return { args };
    },
    template: `<Toolbar class="bg-primary text-primary-foreground">
      <Button flat round dense class="mr-2">
        <Icon name="menu" size="sm"/>
      </Button>
      <Separator v-bind="args">${args.default}</Separator>
      <Space/>
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
    vertical: true,
    default: ``,
  },
};

export const VerticalInset: Story = {
  render: (args) => ({
    components: { Toolbar, Button, Icon, Space, Separator },
    setup() {
      return { args };
    },
    template: `<Toolbar class="bg-primary text-primary-foreground">
      <Button flat round dense class="mr-2">
        <Icon name="menu" size="sm"/>
      </Button>
      <Separator v-bind="args">${args.default}</Separator>
      <Space/>
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
    inset: true,
    vertical: true,
    default: ``,
  },
};

export const VerticalInsetSpaced: Story = {
  render: (args) => ({
    components: { Toolbar, Button, Icon, Space, Separator },
    setup() {
      return { args };
    },
    template: `<Toolbar class="bg-primary text-primary-foreground">
      <Button flat round dense class="mr-2">
        <Icon name="menu" size="sm"/>
      </Button>
      <Separator v-bind="args">${args.default}</Separator>
      <Space/>
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
    inset: true,
    spaced: 'xl',
    vertical: true,
    default: ``,
  },
};
