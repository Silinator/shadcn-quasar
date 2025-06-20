import { cva, type VariantProps } from 'class-variance-authority';

export { default as Separator } from './Separator.vue';
export const separatorVariants = cva('relative', {
  variants: {
    hasContent: {
      true: 'flex items-center text-xs text-current/50 before:mr-2 before:flex-1 before:border-t before:border-current/50 after:ml-2 after:flex-1 after:border-t after:border-current/50',
      false: 'border-0 bg-current/30',
    },
    spaced: {
      xs: '',
      sm: '',
      md: '',
      lg: '',
      xl: '',
      false: '',
    },
    inset: {
      true: '',
      false: '',
      item: 'mr-0 ml-[72px]',
      'item-thumbnail': 'mr-0 ml-[116px]',
    },
    vertical: {
      true: '',
      false: '',
    },
  },
  compoundVariants: [
    {
      vertical: true,
      hasContent: false,
      class: 'h-auto w-0.25 self-stretch',
    },
    {
      vertical: false,
      hasContent: false,
      class: 'block h-0.25',
    },

    {
      vertical: false,
      spaced: true,
      class: 'my-2',
    },
    {
      vertical: false,
      spaced: 'xs',
      class: 'my-0.25',
    },
    {
      vertical: false,
      spaced: 'sm',
      class: 'my-1',
    },
    {
      vertical: false,
      spaced: 'md',
      class: 'my-2',
    },
    {
      vertical: false,
      spaced: 'lg',
      class: 'my-4',
    },
    {
      vertical: false,
      spaced: 'xl',
      class: 'my-6',
    },
    {
      vertical: false,
      inset: true,
      class: 'mx-4',
    },

    {
      vertical: true,
      spaced: true,
      class: 'mx-2',
    },
    {
      vertical: true,
      spaced: 'xs',
      class: 'mx-0.25',
    },
    {
      vertical: true,
      spaced: 'sm',
      class: 'mx-1',
    },
    {
      vertical: true,
      spaced: 'md',
      class: 'mx-2',
    },
    {
      vertical: true,
      spaced: 'lg',
      class: 'mx-4',
    },
    {
      vertical: true,
      spaced: 'xl',
      class: 'mx-6',
    },
    {
      vertical: true,
      inset: true,
      class: 'my-2',
    },
  ],
  defaultVariants: {
    inset: false,
    vertical: false,
    spaced: false,
    hasContent: false,
  },
});

export type SeparatorVariants = VariantProps<typeof separatorVariants>;
