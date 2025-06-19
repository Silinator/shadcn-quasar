import { cva, type VariantProps } from 'class-variance-authority';

export { default as Badge } from './Badge.vue';
export const badgeVariants = cva('relative inline-flex min-h-3 items-center bg-inherit px-1.5 py-0.5 text-xs text-inherit', {
  variants: {
    outline: {
      true: 'border border-current bg-transparent text-inherit',
      false: '',
    },
    rounded: {
      true: 'rounded-full',
      false: 'rounded-md',
    },
    transparent: {
      true: 'opacity-80',
      false: '',
    },
    floating: {
      true: 'absolute -top-1 right-[-3px] cursor-[inherit]',
      false: '',
    },
    multiLine: {
      true: 'wrap-break-word break-all',
      false: 'whitespace-nowrap',
    },
    align: {
      top: 'align-top',
      middle: 'align-middle',
      bottom: 'align-bottom',
    },
  },
  defaultVariants: {
    outline: false,
    rounded: false,
    transparent: false,
    floating: false,
    multiLine: false,
    align: 'middle',
  },
});

export type BadgeVariants = VariantProps<typeof badgeVariants>;
