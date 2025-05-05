import { cva, type VariantProps } from 'class-variance-authority';

export { default as Icon } from './Icon.vue';

export const iconVariants = cva('pointer-events-none select-none', {
  variants: {
    variant: {
      outlined: 'mui-symbols mui-symbols-outlined',
      rounded: 'mui-symbols mui-symbols-rounded',
      sharp: 'mui-symbols mui-symbols-sharp',
    },
    size: {
      inherit: 'text-inherit',
      xs: 'text-lg',
      sm: 'text-2xl',
      md: 'text-3xl',
      lg: 'text-4xl',
      xl: 'text-[42px]',
    },
  },
  defaultVariants: {
    variant: 'rounded',
    size: 'inherit',
  },
});

export type IconVariants = VariantProps<typeof iconVariants>;
