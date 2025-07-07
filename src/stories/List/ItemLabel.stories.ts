import { Item, ItemLabel, ItemSelection, List } from '@/components/ui/list';
import type { Meta, StoryObj } from '@storybook/vue3-vite';

const meta: Meta<typeof ItemLabel> = {
  title: 'UI/List/ItemLabel',
  component: ItemLabel,
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
          <ItemSelection>
            <ItemLabel v-bind="args">${args.default}</ItemLabel>
            <ItemLabel caption>Caption</ItemLabel>
          </ItemSelection>
        </item>
        <Item>
          <ItemSelection>
            <ItemLabel v-bind="args">${args.default}</ItemLabel>
            <ItemLabel caption>Caption</ItemLabel>
          </ItemSelection>
        </item>
        <Item>
          <ItemSelection>
            <ItemLabel v-bind="args">${args.default}</ItemLabel>
            <ItemLabel caption>Caption</ItemLabel>
          </ItemSelection>
        </item>
      </List>
    `,
  }),
  args: {
    overline: false,
    caption: false,
    header: false,
    class: 'text-primary',
    default: `
      <ItemLabel>Item</ItemLabel>
    `,
  },
};
