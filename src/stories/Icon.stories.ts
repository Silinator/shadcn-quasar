import Icon from '@/components/ui/icon/Icon.vue';
import type { Meta, StoryObj } from '@storybook/vue3-vite';

const meta: Meta<typeof Icon> = {
  title: 'UI/Icon',
  component: Icon,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    class: 'text-primary',
    name: 'font_download',
    size: 'md',
  },
};

export const BasicCustomColors: Story = {
  args: {
    class: 'text-blue-500',
    name: 'font_download',
    size: 'md',
  },
};

export const Filled: Story = {
  args: {
    class: 'text-primary',
    name: 'check_box',
    size: 'md',
    filled: true,
  },
};

export const Outlined: Story = {
  args: {
    class: 'text-primary',
    name: 'check_box',
    size: 'md',
    variant: 'outlined',
  },
};

export const Sharp: Story = {
  args: {
    class: 'text-primary',
    name: 'check_box',
    size: 'md',
    variant: 'sharp',
  },
};

export const CustomSize: Story = {
  args: {
    class: 'text-primary text-8xl',
    name: 'font_download',
  },
};
