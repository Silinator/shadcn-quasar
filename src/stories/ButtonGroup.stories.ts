import { Button } from '@/components/ui/button';
import { ButtonGroup } from '@/components/ui/buttonGroup';
import Icon from '@/components/ui/icon/Icon.vue';
import type { Meta, StoryObj } from '@storybook/vue3-vite';

const meta: Meta<typeof ButtonGroup> = {
  title: 'UI/ButtonGroup',
  component: ButtonGroup,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  render: (args) => ({
    components: { Button, ButtonGroup },
    setup() {
      return { args };
    },
    template: `
      <ButtonGroup v-bind="args">${args.default}</ButtonGroup>
    `,
  }),
  args: {
    class: '',
    default: `
      <Button>Standard</Button>
      <Button>Standard</Button>
      <Button>Standard</Button>
    `,
  },
};

export const Push: Story = {
  render: (args) => ({
    components: { Button, ButtonGroup },
    setup() {
      return { args };
    },
    template: `
      <ButtonGroup v-bind="args">${args.default}</ButtonGroup>
    `,
  }),
  args: {
    class: '',
    push: true,
    default: `
      <Button push class="bg-cyan-600 text-white">Push</Button>
      <Button push class="bg-cyan-600 text-white">Push</Button>
      <Button push class="bg-cyan-600 text-white">Push</Button>
    `,
  },
};

export const Glossy: Story = {
  render: (args) => ({
    components: { Button, ButtonGroup, Icon },
    setup() {
      return { args };
    },
    template: `
      <ButtonGroup v-bind="args">${args.default}</ButtonGroup>
    `,
  }),
  args: {
    class: '',
    glossy: true,
    default: `
      <Button glossy class="bg-yellow-600 text-white"><Icon name="timeline" size="sm"/>Glossy</Button>
      <Button glossy class="bg-yellow-600 text-white"><Icon name="visibility" size="sm"/>Glossy</Button>
      <Button glossy class="bg-yellow-600 text-white"><Icon name="update" size="sm"/>Glossy</Button>
    `,
  },
};

export const Outline: Story = {
  render: (args) => ({
    components: { Button, ButtonGroup },
    setup() {
      return { args };
    },
    template: `
      <ButtonGroup v-bind="args">${args.default}</ButtonGroup>
    `,
  }),
  args: {
    class: 'text-lime-600',
    outline: true,
    default: `
      <Button outline class="text-lime-600">Outline</Button>
      <Button outline class="text-lime-600">Outline</Button>
      <Button outline class="text-lime-600">Outline</Button>
    `,
  },
};

export const Rounded: Story = {
  render: (args) => ({
    components: { Button, ButtonGroup },
    setup() {
      return { args };
    },
    template: `
      <ButtonGroup v-bind="args">${args.default}</ButtonGroup>
    `,
  }),
  args: {
    class: '',
    rounded: true,
    default: `
      <Button rounded class="bg-pink-600 text-white">Rounded</Button>
      <Button rounded class="bg-pink-600 text-white">Rounded</Button>
      <Button rounded class="bg-pink-600 text-white">Rounded</Button>
    `,
  },
};

export const Flat: Story = {
  render: (args) => ({
    components: { Button, ButtonGroup },
    setup() {
      return { args };
    },
    template: `
      <ButtonGroup v-bind="args">${args.default}</ButtonGroup>
    `,
  }),
  args: {
    class: '',
    flat: true,
    default: `
      <Button flat class="text-red-600">Flat</Button>
      <Button flat class="text-red-600">Flat</Button>
      <Button flat class="text-red-600">Flat</Button>
    `,
  },
};

export const Spread: Story = {
  render: (args) => ({
    components: { Button, ButtonGroup },
    setup() {
      return { args };
    },
    template: `
      <ButtonGroup v-bind="args">${args.default}</ButtonGroup>
    `,
  }),
  args: {
    class: 'w-full',
    spread: true,
    default: `
      <Button class="bg-purple-600 text-white">Spread</Button>
      <Button class="bg-purple-600 text-white">Spread</Button>
      <Button class="bg-purple-600 text-white">Spread</Button>
    `,
  },
};
