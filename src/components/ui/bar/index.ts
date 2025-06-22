import { cva, type VariantProps } from 'class-variance-authority';

export { default as Bar } from './Bar.vue';
export const barVariants = cva(
  'relative flex flex-nowrap items-center bg-inherit text-inherit [&>button]:text-[11px] [&>button:not(:first-child)]:ml-0.5 [&>div:not(:first-child)]:ml-2 [&>i:not(:first-child)]:ml-2',
  {
    variants: {
      dense: {
        true: 'h-6 px-2 py-0 text-sm',
        false: 'h-8 px-3 py-0 text-lg',
      },
    },
    defaultVariants: {
      dense: false,
    },
  },
);

export type BarVariants = VariantProps<typeof barVariants>;
