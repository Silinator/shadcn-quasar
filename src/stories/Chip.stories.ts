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
