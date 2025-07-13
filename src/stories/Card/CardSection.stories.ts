import { Button } from '@/components/ui/button';
import { Card, CardActions, CardSection } from '@/components/ui/card/';
import { Separator } from '@/components/ui/separator';
import type { Meta, StoryObj } from '@storybook/vue3-vite';

const meta: Meta<typeof CardSection> = {
  title: 'UI/Card/CardSection',
  component: CardSection,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicHorizontal: Story = {
  render: (args) => ({
    components: { Card, CardSection, CardActions, Separator, Button },
    setup() {
      return { args };
    },
    template: `
      <Card flat bordered class="max-w-[350px] w-full">
        <CardSection v-bind="args">
          ${args.default}
        </CardSection>
      </Card>
    `,
  }),
  args: {
    class: 'bg-background text-background-foreground',
    horizontal: true,
    default: `
      <CardSection>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </CardSection>

      <img
        class="w-5/12 h-auto object-cover object-[50%_50%]"
        src="https://cdn.quasar.dev/img/parallax2.jpg"
      />
    `,
  },
};
