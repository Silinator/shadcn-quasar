import Icon from '@/components/ui/icon/Icon.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof Icon> = {
  title: 'UI/Icon',
  component: Icon,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    name: 'font_download',
    size: 'md',
  },
};

export const BasicCustomColors: Story = {
  args: {
    name: 'font_download',
    size: 'md',
    class: 'text-blue-500',
  },
};

export const Filled: Story = {
  args: {
    name: 'font_download',
    size: 'md',
    filled: true,
  },
};

export const Outlined: Story = {
  args: {
    name: 'font_download',
    size: 'md',
    variant: 'outlined',
  },
};

export const Sharp: Story = {
  args: {
    name: 'font_download',
    size: 'md',
    variant: 'sharp',
  },
};

export const CustomSize: Story = {
  args: {
    name: 'font_download',
    class: 'text-8xl',
  },
};
