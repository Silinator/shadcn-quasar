import {
  SpinneHourglass,
  SpinneInfinity,
  SpinnerAudio,
  SpinnerBall,
  SpinnerBars,
  SpinnerBox,
  SpinnerClock,
  SpinnerComment,
  SpinnerCube,
  SpinnerDots,
  SpinnerFacebook,
  SpinnerGears,
  SpinnerGrid,
  SpinnerHearts,
  SpinnerIos,
  SpinnerOrbit,
  SpinnerOval,
  SpinnerPie,
  SpinnerPuff,
  SpinnerRadio,
  SpinnerRings,
  SpinnerTail,
} from '@/components/ui/spinner/';
import type { Meta, StoryObj } from '@storybook/vue3-vite';

const makeSource = (componentName: string, extraArgs: Record<string, any> = {}) => {
  const props = Object.entries(extraArgs)
    .map(([k, v]) => `${k}="${v}"`)
    .join('\n    ');
  return `<template>
    <${componentName}
      ${props ? `${props}` : ''}
    />
  </template>`;
};

const meta: Meta<typeof SpinnerAudio> = {
  title: 'UI/SpinnerOther',
  component: SpinnerAudio,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AudioSpinner: Story = {
  render: (args) => ({
    components: { SpinnerAudio },
    setup() {
      return { args };
    },
    template: `<SpinnerAudio v-bind="args" />`,
  }),
  args: { class: 'text-primary' },
  parameters: {
    docs: { source: { code: makeSource('SpinnerAudio') } },
  },
};

export const BallSpinner: Story = {
  render: (args) => ({
    components: { SpinnerBall },
    setup() {
      return { args };
    },
    template: `<SpinnerBall v-bind="args" />`,
  }),
  args: { class: 'text-orange-500' },
  parameters: {
    docs: { source: { code: makeSource('SpinnerBall', { class: 'text-orange-500' }) } },
  },
};

export const BarSpinner: Story = {
  render: (args) => ({
    components: { SpinnerBars },
    setup() {
      return { args };
    },
    template: `<SpinnerBars v-bind="args" />`,
  }),
  args: { class: 'text-yellow-500' },
  parameters: {
    docs: { source: { code: makeSource('SpinnerBars', { class: 'text-yellow-500' }) } },
  },
};

export const BoxSpinner: Story = {
  render: (args) => ({
    components: { SpinnerBox },
    setup() {
      return { args };
    },
    template: `<SpinnerBox v-bind="args" />`,
  }),
  args: { class: 'text-cyan-500' },
  parameters: {
    docs: { source: { code: makeSource('SpinnerBox', { class: 'text-cyan-500' }) } },
  },
};

export const ClockSpinner: Story = {
  render: (args) => ({
    components: { SpinnerClock },
    setup() {
      return { args };
    },
    template: `<SpinnerClock v-bind="args" />`,
  }),
  args: { class: 'text-purple-500' },
  parameters: {
    docs: { source: { code: makeSource('SpinnerClock', { class: 'text-purple-500' }) } },
  },
};

export const CommentSpinner: Story = {
  render: (args) => ({
    components: { SpinnerComment },
    setup() {
      return { args };
    },
    template: `<SpinnerComment v-bind="args" />`,
  }),
  args: { class: 'text-pink-500' },
  parameters: {
    docs: { source: { code: makeSource('SpinnerComment', { class: 'text-pink-500' }) } },
  },
};

export const CubeSpinner: Story = {
  render: (args) => ({
    components: { SpinnerCube },
    setup() {
      return { args };
    },
    template: `<SpinnerCube v-bind="args" />`,
  }),
  args: { class: 'text-teal-500' },
  parameters: {
    docs: { source: { code: makeSource('SpinnerCube', { class: 'text-teal-500' }) } },
  },
};

export const DotsSpinner: Story = {
  render: (args) => ({
    components: { SpinnerDots },
    setup() {
      return { args };
    },
    template: `<SpinnerDots v-bind="args" />`,
  }),
  args: { class: 'text-amber-500' },
  parameters: {
    docs: { source: { code: makeSource('SpinnerDots', { class: 'text-amber-500' }) } },
  },
};

export const FacebookSpinner: Story = {
  render: (args) => ({
    components: { SpinnerFacebook },
    setup() {
      return { args };
    },
    template: `<SpinnerFacebook v-bind="args" />`,
  }),
  args: { class: 'text-sky-500' },
  parameters: {
    docs: { source: { code: makeSource('SpinnerFacebook', { class: 'text-sky-500' }) } },
  },
};

export const GearsSpinner: Story = {
  render: (args) => ({
    components: { SpinnerGears },
    setup() {
      return { args };
    },
    template: `<SpinnerGears v-bind="args" />`,
  }),
  args: { class: 'text-fuchsia-500' },
  parameters: {
    docs: { source: { code: makeSource('SpinnerGears', { class: 'text-fuchsia-500' }) } },
  },
};

export const GridSpinner: Story = {
  render: (args) => ({
    components: { SpinnerGrid },
    setup() {
      return { args };
    },
    template: `<SpinnerGrid v-bind="args" />`,
  }),
  args: { class: 'text-gray-500' },
  parameters: {
    docs: { source: { code: makeSource('SpinnerGrid', { class: 'text-gray-500' }) } },
  },
};

export const HeartsSpinner: Story = {
  render: (args) => ({
    components: { SpinnerHearts },
    setup() {
      return { args };
    },
    template: `<SpinnerHearts v-bind="args" />`,
  }),
  args: { class: 'text-rose-400' },
  parameters: {
    docs: { source: { code: makeSource('SpinnerHearts', { class: 'text-rose-400' }) } },
  },
};

export const HourglassSpinner: Story = {
  render: (args) => ({
    components: { SpinneHourglass },
    setup() {
      return { args };
    },
    template: `<SpinneHourglass v-bind="args" />`,
  }),
  args: { class: 'text-emerald-500' },
  parameters: {
    docs: { source: { code: makeSource('SpinneHourglass', { class: 'text-emerald-500' }) } },
  },
};

export const InfinitySpinner: Story = {
  render: (args) => ({
    components: { SpinneInfinity },
    setup() {
      return { args };
    },
    template: `<SpinneInfinity v-bind="args" />`,
  }),
  args: { class: 'text-lime-500' },
  parameters: {
    docs: { source: { code: makeSource('SpinneInfinity', { class: 'text-lime-500' }) } },
  },
};

export const IosSpinner: Story = {
  render: (args) => ({
    components: { SpinnerIos },
    setup() {
      return { args };
    },
    template: `<SpinnerIos v-bind="args" />`,
  }),
  args: { class: 'text-indigo-500' },
  parameters: {
    docs: { source: { code: makeSource('SpinnerIos', { class: 'text-indigo-500' }) } },
  },
};

export const OrbitSpinner: Story = {
  render: (args) => ({
    components: { SpinnerOrbit },
    setup() {
      return { args };
    },
    template: `<SpinnerOrbit v-bind="args" />`,
  }),
  args: { class: 'text-neutral-500' },
  parameters: {
    docs: { source: { code: makeSource('SpinnerOrbit', { class: 'text-neutral-500' }) } },
  },
};

export const OvalSpinner: Story = {
  render: (args) => ({
    components: { SpinnerOval },
    setup() {
      return { args };
    },
    template: `<SpinnerOval v-bind="args" />`,
  }),
  args: { class: 'text-blue-700' },
  parameters: {
    docs: { source: { code: makeSource('SpinnerOval', { class: 'text-blue-700' }) } },
  },
};

export const PieSpinner: Story = {
  render: (args) => ({
    components: { SpinnerPie },
    setup() {
      return { args };
    },
    template: `<SpinnerPie v-bind="args" />`,
  }),
  args: { class: 'text-green-700' },
  parameters: {
    docs: { source: { code: makeSource('SpinnerPie', { class: 'text-green-700' }) } },
  },
};

export const PuffSpinner: Story = {
  render: (args) => ({
    components: { SpinnerPuff },
    setup() {
      return { args };
    },
    template: `<SpinnerPuff v-bind="args" />`,
  }),
  args: { class: 'text-orange-700' },
  parameters: {
    docs: { source: { code: makeSource('SpinnerPuff', { class: 'text-orange-700' }) } },
  },
};

export const RadioSpinner: Story = {
  render: (args) => ({
    components: { SpinnerRadio },
    setup() {
      return { args };
    },
    template: `<SpinnerRadio v-bind="args" />`,
  }),
  args: { class: 'text-violet-700' },
  parameters: {
    docs: { source: { code: makeSource('SpinnerRadio', { class: 'text-violet-700' }) } },
  },
};

export const RingsSpinner: Story = {
  render: (args) => ({
    components: { SpinnerRings },
    setup() {
      return { args };
    },
    template: `<SpinnerRings v-bind="args" />`,
  }),
  args: { class: 'text-teal-700' },
  parameters: {
    docs: { source: { code: makeSource('SpinnerRings', { class: 'text-teal-700' }) } },
  },
};

export const TailSpinner: Story = {
  render: (args) => ({
    components: { SpinnerTail },
    setup() {
      return { args };
    },
    template: `<SpinnerTail v-bind="args" />`,
  }),
  args: { class: 'text-red-700' },
  parameters: {
    docs: { source: { code: makeSource('SpinnerTail', { class: 'text-red-700' }) } },
  },
};
