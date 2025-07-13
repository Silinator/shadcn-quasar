import { VideoFrame } from '@/components/ui/videoFrame';
import type { Meta, StoryObj } from '@storybook/vue3-vite';

const meta: Meta<typeof VideoFrame> = {
  title: 'UI/VideoFrame',
  component: VideoFrame,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args) => ({
    components: { VideoFrame },
    setup() {
      return { args };
    },
    template: `<VideoFrame v-bind="args"/>`,
  }),
  args: {
    class: '',
    src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    default: ``,
  },
};

export const WithAspectRatio: Story = {
  render: (args) => ({
    components: { VideoFrame },
    setup() {
      return { args };
    },
    template: `<VideoFrame v-bind="args"/>`,
  }),
  args: {
    class: 'aspect-video',
    src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    default: ``,
  },
};
