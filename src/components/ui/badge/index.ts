import { cva, type VariantProps } from 'class-variance-authority';

export { default as Badge } from './Badge.vue';
export const badgeVariants = cva('flex-inline bg-primary text-primary-foreground inline-flex min-h-3 items-center px-1.5 py-0.5 text-xs', {
  variants: {
    outline: {
      true: 'bg-transparant text-primary border border-current',
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
      true: 'cursor-inherit absolute -top-1 right-[-3px]',
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
