import { Item, ItemLabel, ItemSelection, List } from '@/components/ui/list';
import type { Meta, StoryObj } from '@storybook/vue3-vite';

const meta: Meta<typeof Item> = {
  title: 'UI/List/Item',
  component: Item,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args) => ({
    components: { List, Item, ItemSelection, ItemLabel },
    setup() {
      return { args };
    },
    template: `
      <List bordered separator rounded class="text-primary">
        <Item v-bind="args">${args.default}</item>
        <Item v-bind="args">${args.default}</item>
        <Item v-bind="args">${args.default}</item>
      </List>
    `,
  }),
  args: {
    clickable: true,
    ripple: true,
    dense: false,
    disable: false,
    class: 'text-primary',
    default: `
      <ItemSelection>
        <ItemLabel>Item</ItemLabel>
        <ItemLabel caption>Caption</ItemLabel>
      </ItemSelection>
    `,
  },
};
