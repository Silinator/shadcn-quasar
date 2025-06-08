import { cva, type VariantProps } from 'class-variance-authority';

export { default as Spinner } from './Spinner.vue';

export const spinnerVariants = cva('inline-block', {
  variants: {
    size: {
      xs: 'h-4 w-4',
      sm: 'h-6 w-6',
      md: 'h-8 w-8',
      lg: 'h-10 w-10',
      xl: 'h-12 w-12',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export type SpinnerVariants = VariantProps<typeof spinnerVariants>;
