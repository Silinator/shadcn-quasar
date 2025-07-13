import { Banner } from '@/components/ui/banner';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import type { Meta, StoryObj } from '@storybook/vue3-vite';

const meta: Meta<typeof Banner> = {
  title: 'UI/Banner',
  component: Banner,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args) => ({
    components: { Banner, Button },
    setup() {
      return { args };
    },
    template: `
    <Banner v-bind="args">
      ${args.default}
      <template v-slot:actions>
        ${args.actions}
      </template>
    </Banner>`,
  }),
  args: {
    class: 'bg-primary text-primary-foreground',
    default: `Unfortunately, the credit card did not go through, please try again.`,
    actions: `
      <Button flat>Dismiss</Button>
      <Button flat>Update Credit Card</Button>
    `,
  },
};

export const WithAvatar: Story = {
  render: (args) => ({
    components: { Banner, Button, Icon },
    setup() {
      return { args };
    },
    template: `
    <Banner v-bind="args">
      <template v-slot:avatar>
        ${args.avatar}
      </template>

      ${args.default}

      <template v-slot:actions>
        ${args.actions}
      </template>
    </Banner>`,
  }),
  args: {
    class: 'bg-gray-200 text-black',
    avatar: `<Icon name="signal_wifi_off" filled class="text-blue-500" />`,
    default: `You have lost connection to the internet. This app is offline.`,
    actions: `
      <Button flat>Turn on Wifi</Button>
    `,
  },
};

export const WithImage: Story = {
  render: (args) => ({
    components: { Banner, Button },
    setup() {
      return { args };
    },
    template: `
    <Banner v-bind="args">
      <template v-slot:avatar>
        ${args.avatar}
      </template>

      ${args.default}
      <template v-slot:actions>
        ${args.actions}
      </template>
    </Banner>`,
  }),
  args: {
    rounded: true,
    class: 'bg-primary text-primary-foreground',
    avatar: `<img src="https://cdn.quasar.dev/img/mountains.jpg" style="width: 100px; height: 64px" />`,
    default: `Could not retrieve travel data.`,
    actions: `
      <Button flat>Retry</Button>
    `,
  },
};

export const inlineActions: Story = {
  render: (args) => ({
    components: { Banner, Button, Icon },
    setup() {
      return { args };
    },
    template: `
    <Banner v-bind="args">
      <template v-slot:avatar>
        ${args.avatar}
      </template>

      ${args.default}

      <template v-slot:actions>
        ${args.actions}
      </template>
    </Banner>`,
  }),
  args: {
    inlineActions: true,
    class: 'bg-red-500 text-white',
    avatar: `<Icon name="signal_wifi_off" filled class="text-white" />`,
    default: `You have lost connection to the internet. This app is offline.`,
    actions: `
      <Button flat>Turn on Wifi</Button>
    `,
  },
};

export const Dense: Story = {
  render: (args) => ({
    components: { Banner, Button, Icon },
    setup() {
      return { args };
    },
    template: `
    <Banner v-bind="args">
      <template v-slot:avatar>
        ${args.avatar}
      </template>

      ${args.default}

      <template v-slot:actions>
        ${args.actions}
      </template>
    </Banner>`,
  }),
  args: {
    dense: true,
    class: 'bg-gray-200 text-black',
    avatar: `<Icon name="signal_wifi_off" filled class="text-blue-500" />`,
    default: `You have lost connection to the internet. This app is offline.`,
    actions: `
      <Button flat>Turn on Wifi</Button>
    `,
  },
};

export const Rounded: Story = {
  render: (args) => ({
    components: { Banner, Button },
    setup() {
      return { args };
    },
    template: `
    <Banner v-bind="args">
      ${args.default}
      <template v-slot:actions>
        ${args.actions}
      </template>
    </Banner>`,
  }),
  args: {
    rounded: true,
    class: 'bg-primary text-primary-foreground',
    default: `Unfortunately, the credit card did not go through, please try again.`,
    actions: `
      <Button flat>Dismiss</Button>
      <Button flat>Update Credit Card</Button>
    `,
  },
};
