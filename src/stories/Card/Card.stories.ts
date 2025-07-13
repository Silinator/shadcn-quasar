import { Button } from '@/components/ui/button';
import { Card, CardActions, CardSection } from '@/components/ui/card/';
import { Separator } from '@/components/ui/separator';
import { VideoFrame } from '@/components/ui/videoFrame';
import type { Meta, StoryObj } from '@storybook/vue3-vite';

const meta: Meta<typeof Card> = {
  title: 'UI/Card/Card',
  component: Card,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args) => ({
    components: { Card, CardSection },
    setup() {
      return { args };
    },
    template: `
      <Card v-bind="args">${args.default}</Card>
    `,
  }),
  args: {
    class: 'bg-background text-background-foreground w-full max-w-[250px]',
    default: `<CardSection>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </CardSection>`,
  },
};

export const CustomBackground: Story = {
  render: (args) => ({
    components: { Card, CardSection },
    setup() {
      return { args };
    },
    template: `
      <Card v-bind="args">${args.default}</Card>
    `,
  }),
  args: {
    class: 'bg-radial from-blue-400 to-blue-700 text-white w-full max-w-[250px]',
    default: `
    <CardSection>
      <div class="text-xl font-medium leading-8">Our Changing Planet</div>
      <div class="text-sm font-medium ">by John Doe</div>
    </CardSection>

    <CardSection class="pt-0">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </CardSection>`,
  },
};

export const Bordered: Story = {
  render: (args) => ({
    components: { Card, CardSection, Separator },
    setup() {
      return { args };
    },
    template: `
      <Card v-bind="args">${args.default}</Card>
    `,
  }),
  args: {
    bordered: true,
    class: 'bg-gray-700 text-white w-full max-w-[250px]',
    default: `
    <CardSection>
      <div class="text-xl font-medium leading-8">Our Changing Planet</div>
      <div class="text-sm font-medium ">by John Doe</div>
    </CardSection>

    <Separator class="dark" inset />

    <CardSection>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </CardSection>`,
  },
};

export const FlatBordered: Story = {
  render: (args) => ({
    components: { Card, CardSection, Separator },
    setup() {
      return { args };
    },
    template: `
      <Card v-bind="args">${args.default}</Card>
    `,
  }),
  args: {
    bordered: true,
    flat: true,
    class: 'bg-background text-background-foreground w-full max-w-[250px]',
    default: `
    <CardSection>
      <div class="text-xl font-medium leading-8">Our Changing Planet</div>
    </CardSection>

    <CardSection class="pt-0">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </CardSection>

    <Separator class="dark" inset />

    <CardSection>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </CardSection>`,
  },
};

export const WithActions: Story = {
  render: (args) => ({
    components: { Card, CardSection, CardActions, Separator, Button },
    setup() {
      return { args };
    },
    template: `
      <Card v-bind="args">${args.default}</Card>
    `,
  }),
  args: {
    class: 'bg-teal-600 text-white',
    default: `
      <CardSection>
        <div class="text-xl font-medium leading-8">Our Changing Planet</div>
        <div class="text-sm font-medium ">by John Doe</div>
      </CardSection>

      <CardSection>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </CardSection>

      <Separator class="dark" />

      <CardActions vertical>
        <Button flat>Action 1</Button>
        <Button flat>Action 2</Button>
      </CardActions>
    `,
  },
};

export const MediaContent: Story = {
  render: (args) => ({
    components: { Card, CardSection, CardActions, Separator, Button },
    setup() {
      return { args };
    },
    template: `
      <Card v-bind="args">${args.default}</Card>
    `,
  }),
  args: {
    class: 'bg-background text-background-foreground w-full max-w-[250px]',
    default: `
      <img src="https://cdn.quasar.dev/img/mountains.jpg"/>

      <CardSection>
        <div class="text-xl font-medium leading-8">Our Changing Planet</div>
        <div class="text-sm font-medium ">by John Doe</div>
      </CardSection>

      <CardSection class="pt-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </CardSection>
    `,
  },
};

export const Video: Story = {
  render: (args) => ({
    components: { Card, CardSection, CardActions, Separator, VideoFrame },
    setup() {
      return { args };
    },
    template: `
      <Card v-bind="args">${args.default}</Card>
    `,
  }),
  args: {
    class: 'bg-background text-background-foreground w-full max-w-[300px]',
    default: `
      <VideoFrame src="https://www.youtube.com/embed/dQw4w9WgXcQ"/>

      <CardSection>
        <div class="text-xl font-medium leading-8">Our Changing Planet</div>
        <div class="text-sm font-medium ">by John Doe</div>
      </CardSection>

      <CardSection class="pt-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </CardSection>
    `,
  },
};
