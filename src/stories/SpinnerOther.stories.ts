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
} from '@/components/ui/spinner/';
import SpinnerFacebook from '@/components/ui/spinner/SpinnerFacebook.vue';
import SpinnerTail from '@/components/ui/spinner/SpinnerTail.vue';
import type { Meta, StoryObj } from '@storybook/vue3-vite';

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
    template: `
      <SpinnerAudio v-bind="args"></SpinnerAudio>
    `,
  }),
  args: {
    class: '',
  },
};

export const BallSpinner: Story = {
  render: (args) => ({
    components: { SpinnerBall },
    setup() {
      return { args };
    },
    template: `
      <SpinnerBall v-bind="args"></SpinnerBall>
    `,
  }),
  args: {
    class: 'text-orange-500',
  },
};

export const BarSpinner: Story = {
  render: (args) => ({
    components: { SpinnerBars },
    setup() {
      return { args };
    },
    template: `
      <SpinnerBars v-bind="args"></SpinnerBars>
    `,
  }),
  args: {
    class: 'text-yellow-500',
  },
};

export const BoxSpinner: Story = {
  render: (args) => ({
    components: { SpinnerBox },
    setup() {
      return { args };
    },
    template: `
      <SpinnerBox v-bind="args"></SpinnerBox>
    `,
  }),
  args: {
    class: 'text-cyan-500',
  },
};

export const ClockSpinner: Story = {
  render: (args) => ({
    components: { SpinnerClock },
    setup() {
      return { args };
    },
    template: `
      <SpinnerClock v-bind="args"></SpinnerClock>
    `,
  }),
  args: {
    class: 'text-purple-500',
  },
};

export const CommentSpinner: Story = {
  render: (args) => ({
    components: { SpinnerComment },
    setup() {
      return { args };
    },
    template: `
      <SpinnerComment v-bind="args"></SpinnerComment>
    `,
  }),
  args: {
    class: 'text-pink-500',
  },
};

export const CubeSpinner: Story = {
  render: (args) => ({
    components: { SpinnerCube },
    setup() {
      return { args };
    },
    template: `
      <SpinnerCube v-bind="args"></SpinnerCube>
    `,
  }),
  args: {
    class: 'text-teal-500',
  },
};

export const DotsSpinner: Story = {
  render: (args) => ({
    components: { SpinnerDots },
    setup() {
      return { args };
    },
    template: `
      <SpinnerDots v-bind="args"></SpinnerDots>
    `,
  }),
  args: {
    class: 'text-amber-500',
  },
};

export const FacebookSpinner: Story = {
  render: (args) => ({
    components: { SpinnerFacebook },
    setup() {
      return { args };
    },
    template: `
      <SpinnerFacebook v-bind="args"></SpinnerFacebook>
    `,
  }),
  args: {
    class: 'text-sky-500',
  },
};

export const GearsSpinner: Story = {
  render: (args) => ({
    components: { SpinnerGears },
    setup() {
      return { args };
    },
    template: `
      <SpinnerGears v-bind="args"></SpinnerGears>
    `,
  }),
  args: {
    class: 'text-fuchsia-500',
  },
};

export const GridSpinner: Story = {
  render: (args) => ({
    components: { SpinnerGrid },
    setup() {
      return { args };
    },
    template: `
      <SpinnerGrid v-bind="args"></SpinnerGrid>
    `,
  }),
  args: {
    class: 'text-gray-500',
  },
};

export const HeartsSpinner: Story = {
  render: (args) => ({
    components: { SpinnerHearts },
    setup() {
      return { args };
    },
    template: `
      <SpinnerHearts v-bind="args"></SpinnerHearts>
    `,
  }),
  args: {
    class: 'text-rose-400',
  },
};

export const HourglassSpinner: Story = {
  render: (args) => ({
    components: { SpinneHourglass },
    setup() {
      return { args };
    },
    template: `
      <SpinneHourglass v-bind="args"></SpinneHourglass>
    `,
  }),
  args: {
    class: 'text-emerald-500',
  },
};

export const InfinitySpinner: Story = {
  render: (args) => ({
    components: { SpinneInfinity },
    setup() {
      return { args };
    },
    template: `
      <SpinneInfinity v-bind="args"></SpinneInfinity>
    `,
  }),
  args: {
    class: 'text-lime-500',
  },
};

export const IosSpinner: Story = {
  render: (args) => ({
    components: { SpinnerIos },
    setup() {
      return { args };
    },
    template: `
      <SpinnerIos v-bind="args"></SpinnerIos>
    `,
  }),
  args: {
    class: 'text-indigo-500',
  },
};

export const OrbitSpinner: Story = {
  render: (args) => ({
    components: { SpinnerOrbit },
    setup() {
      return { args };
    },
    template: `
      <SpinnerOrbit v-bind="args"></SpinnerOrbit>
    `,
  }),
  args: {
    class: 'text-neutral-500',
  },
};

export const OvalSpinner: Story = {
  render: (args) => ({
    components: { SpinnerOval },
    setup() {
      return { args };
    },
    template: `
      <SpinnerOval v-bind="args"></SpinnerOval>
    `,
  }),
  args: {
    class: 'text-blue-700',
  },
};

export const PieSpinner: Story = {
  render: (args) => ({
    components: { SpinnerPie },
    setup() {
      return { args };
    },
    template: `
      <SpinnerPie v-bind="args"></SpinnerPie>
    `,
  }),
  args: {
    class: 'text-green-700',
  },
};

export const PuffSpinner: Story = {
  render: (args) => ({
    components: { SpinnerPuff },
    setup() {
      return { args };
    },
    template: `
      <SpinnerPuff v-bind="args"></SpinnerPuff>
    `,
  }),
  args: {
    class: 'text-orange-700',
  },
};

export const RadioSpinner: Story = {
  render: (args) => ({
    components: { SpinnerRadio },
    setup() {
      return { args };
    },
    template: `
      <SpinnerRadio v-bind="args"></SpinnerRadio>
    `,
  }),
  args: {
    class: 'text-violet-700',
  },
};

export const RingsSpinner: Story = {
  render: (args) => ({
    components: { SpinnerRings },
    setup() {
      return { args };
    },
    template: `
      <SpinnerRings v-bind="args"></SpinnerRings>
    `,
  }),
  args: {
    class: 'text-teal-700',
  },
};

export const TailSpinner: Story = {
  render: (args) => ({
    components: { SpinnerTail },
    setup() {
      return { args };
    },
    template: `
      <SpinnerTail v-bind="args"></SpinnerTail>
    `,
  }),
  args: {
    class: 'text-red-700',
  },
};
