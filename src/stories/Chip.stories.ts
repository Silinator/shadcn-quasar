import { Chip, ChipIcon, ChipRemoveButton } from '@/components/ui/chip';
import Icon from '@/components/ui/icon/Icon.vue';
import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof Chip> = {
  title: 'UI/Chip',
  component: Chip,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args) => ({
    components: { Chip },
    setup() {
      return { args };
    },
    template: `
      <Chip v-bind="args">${args.default}</Chip>
    `,
  }),
  args: {
    class: 'bg-blue-500 text-white',
    default: `#007ABF`,
  },
};

export const BasisCustomColors: Story = {
  render: (args) => ({
    components: { Chip },
    setup() {
      return { args };
    },
    template: `
      <Chip v-bind="args">${args.default}</Chip>
    `,
  }),
  args: {
    class: 'bg-orange-400 text-white',
    default: `Bookmark`,
  },
};

export const Square: Story = {
  render: (args) => ({
    components: { Chip },
    setup() {
      return { args };
    },
    template: `
      <Chip v-bind="args">${args.default}</Chip>
    `,
  }),
  args: {
    class: 'bg-red-500 text-white',
    square: true,
    default: `Bookmark`,
  },
};

export const Outline: Story = {
  render: (args) => ({
    components: { Chip },
    setup() {
      return { args };
    },
    template: `
      <Chip v-bind="args">${args.default}</Chip>
    `,
  }),
  args: {
    class: 'text-emerald-500',
    outline: true,
    default: `Bookmark`,
  },
};

export const OutlineSquared: Story = {
  render: (args) => ({
    components: { Chip },
    setup() {
      return { args };
    },
    template: `
      <Chip v-bind="args">${args.default}</Chip>
    `,
  }),
  args: {
    class: 'text-amber-700',
    outline: true,
    square: true,
    default: `Bookmark`,
  },
};

export const disabled: Story = {
  render: (args) => ({
    components: { Chip },
    setup() {
      return { args };
    },
    template: `
      <Chip v-bind="args">${args.default}</Chip>
    `,
  }),
  args: {
    class: 'bg-rose-700 text-white',
    disable: true,
    default: `Bookmark`,
  },
};

export const dense: Story = {
  render: (args) => ({
    components: { Chip },
    setup() {
      return { args };
    },
    template: `
      <Chip v-bind="args">${args.default}</Chip>
    `,
  }),
  args: {
    class: 'bg-fuchsia-800 text-white',
    dense: true,
    default: `Bookmark`,
  },
};

export const DiffrentSizes: Story = {
  render: (args) => ({
    components: { Chip, Icon },
    setup() {
      return { args };
    },
    template: `
      <Chip v-bind="args">${args.default}</Chip>
      <Chip v-bind="args" size="sm">${args.default}</Chip>
      <Chip v-bind="args" size="md">${args.default}</Chip>
      <Chip v-bind="args" size="lg">${args.default}</Chip>
      <Chip v-bind="args" size="xl">${args.default}</Chip>
      <br />
      <Chip v-bind="args" dense >${args.default}</Chip>
      <Chip v-bind="args" dense size="sm">${args.default}</Chip>
      <Chip v-bind="args" dense size="md">${args.default}</Chip>
      <Chip v-bind="args" dense size="lg">${args.default}</Chip>
      <Chip v-bind="args" dense size="xl">${args.default}</Chip>
    `,
  }),
  args: {
    class: 'bg-green-300 text-white',
    size: 'xs',
    default: `<Icon filled name="bookmark" /> Bookmark`,
  },
};

export const CustomSize: Story = {
  render: (args) => ({
    components: { Chip, Icon },
    setup() {
      return { args };
    },
    template: `
      <Chip v-bind="args">${args.default}</Chip>
    `,
  }),
  args: {
    class: 'bg-green-300 text-white text-6xl',
    default: `<Icon filled name="bookmark" /> Bookmark`,
  },
};

export const BasisWithIcon: Story = {
  render: (args) => ({
    components: { Chip, Icon },
    setup() {
      return { args };
    },
    template: `
      <Chip v-bind="args">${args.default}</Chip>
    `,
  }),
  args: {
    class: 'bg-purple-400',
    default: `
      <Icon name="bluetooth" />
      Bluetooth
    `,
  },
};

export const BasisWithChipIcon: Story = {
  render: (args) => ({
    components: { Chip, ChipIcon },
    setup() {
      return { args };
    },
    template: `
      <Chip v-model:selected="args.selected" v-bind="args">${args.default}</Chip>
    `,
  }),
  args: {
    onClick: fn(),
    'onUpdate:selected': fn(),
    class: 'bg-lime-700',
    selected: false,
    default: `
      <ChipIcon name="bluetooth"/>
      Bluetooth
    `,
  },
};

export const BasisWithChipCustomIcon: Story = {
  render: (args) => ({
    components: { Chip, ChipIcon },
    setup() {
      return { args };
    },
    template: `
      <Chip v-model:selected="args.selected" v-bind="args">${args.default}</Chip>
    `,
  }),
  args: {
    onClick: fn(),
    'onUpdate:selected': fn(),
    class: 'bg-gray-200',
    selected: true,
    default: `
      <ChipIcon name="bluetooth" iconSelected="check_circle"/>
      Bluetooth
    `,
  },
};

export const BasisWithChipWithRemove: Story = {
  render: (args) => ({
    components: { Chip, ChipIcon, ChipRemoveButton },
    setup() {
      return { args };
    },
    template: `
      <Chip v-model:selected="args.selected" v-bind="args">${args.default}</Chip>
    `,
  }),
  args: {
    onClick: fn(),
    'onUpdate:selected': fn(),
    onRemove: fn(),
    'onUpdate:modelValue': fn(),
    class: 'bg-blue-400',
    selected: true,
    default: `
      <ChipIcon name="bluetooth" iconSelected="check_circle"/>
      Bluetooth
      <ChipRemoveButton filled />
    `,
  },
};

export const OutlinedWithChipWithRemove: Story = {
  render: (args) => ({
    components: { Chip, ChipIcon, ChipRemoveButton },
    setup() {
      return { args };
    },
    template: `
      <Chip v-model:selected="args.selected" v-bind="args">${args.default}</Chip>
    `,
  }),
  args: {
    onClick: fn(),
    'onUpdate:selected': fn(),
    onRemove: fn(),
    'onUpdate:modelValue': fn(),
    class: 'text-blue-600',
    selected: true,
    outline: true,
    default: `
      <ChipIcon name="bluetooth" iconSelected="check_circle"/>
      Bluetooth
      <ChipRemoveButton filled />
    `,
  },
};
