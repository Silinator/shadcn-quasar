import { Item, ItemLabel, ItemSelection, List } from '@/components/ui/list';
import type { Meta, StoryObj } from '@storybook/vue3-vite';

const meta: Meta<typeof ItemSelection> = {
  title: 'UI/List/ItemSelection',
  component: ItemSelection,
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
        <Item>
          <ItemSelection v-bind="args">${args.default}</ItemSelection>
        </item>
        <Item>
          <ItemSelection v-bind="args">${args.default}</ItemSelection>
        </item>
        <Item>
          <ItemSelection v-bind="args">${args.default}</ItemSelection>
        </item>
      </List>
    `,
  }),
  args: {
    avatar: false,
    thumbnail: false,
    side: false,
    top: false,
    noWrap: false,
    class: 'text-primary',
    default: `
      <ItemLabel>Item</ItemLabel>
      <ItemLabel caption>Caption</ItemLabel>
    `,
  },
};
