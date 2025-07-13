import { Button } from '@/components/ui/button';
import { Card, CardActions, CardSection } from '@/components/ui/card/';
import { Separator } from '@/components/ui/separator';
import type { Meta, StoryObj } from '@storybook/vue3-vite';

const meta: Meta<typeof CardActions> = {
  title: 'UI/Card/CardActions',
  component: CardActions,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AligningActions: Story = {
  render: (args) => ({
    components: { Card, CardSection, CardActions, Separator, Button },
    setup() {
      return { args };
    },
    template: `
      <Card class="max-w-[250px]">
        <CardSection class="bg-blue-500 text-white">
          <div class="text-xl font-medium leading-8">Our Changing Planet</div>
          <div class="text-sm font-medium">by John Doe</div>
        </CardSection>

        <Separator/>

        <CardActions  v-bind="args">
          ${args.default}
        </CardActions>
      </Card>
    `,
  }),
  args: {
    align: 'right',
    default: `
      <Button flat>Action 1</Button>
      <Button flat>Action 2</Button>
    `,
  },
};

export const AligningVerticalActions: Story = {
  render: (args) => ({
    components: { Card, CardSection, CardActions, Separator, Button },
    setup() {
      return { args };
    },
    template: `
      <Card class="max-w-[250px]">
        <CardSection class="bg-teal-600 text-white">
          <div class="text-xl font-medium leading-8">Our Changing Planet</div>
          <div class="text-sm font-medium">by John Doe</div>
        </CardSection>

        <Separator/>

        <CardActions  v-bind="args">
          ${args.default}
        </CardActions>
      </Card>
    `,
  }),
  args: {
    align: 'center',
    vertical: true,
    default: `
      <Button flat>Action 1</Button>
      <Button flat>Action 2</Button>
    `,
  },
};
