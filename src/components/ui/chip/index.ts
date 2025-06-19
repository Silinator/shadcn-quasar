import { cva, type VariantProps } from 'class-variance-authority';

export { default as Chip } from './Chip.vue';
export { default as ChipIcon } from './ChipIcon.vue';
export { default as ChipRemoveButton } from './ChipRemoveButton.vue';

export const chipVariants = cva(
  'bg-inherit-foreground relative m-1 inline-flex max-w-full items-center gap-2 text-inherit outline-0 [&>i]:-m-1 [&>i]:text-[1.5em]',
  {
    variants: {
      dense: {
        true: 'h-[1.5em] px-[0.4em] py-0',
        false: 'h-[2em] px-[0.9em] py-[0.5em]',
      },
      square: {
        true: 'rounded-lg',
        false: '',
      },
      outline: {
        true: 'border border-current bg-transparent text-inherit',
        false: '',
      },
      size: {
        xs: 'text-[8px]',
        sm: 'text-xs',
        md: 'text-base',
        lg: 'text-xl',
        xl: 'text-2xl',
      },
      isClickable: {
        true: 'cursor-pointer select-none focus:shadow-sm focus:outline-none',
        false: '',
      },
      disable: {
        true: 'cursor-not-allowed opacity-60',
        false: '',
      },
    },
    compoundVariants: [
      {
        dense: false,
        square: false,
        class: 'rounded-2xl',
      },
      {
        dense: true,
        square: false,
        class: 'rounded-xl',
      },
    ],
    defaultVariants: {
      dense: false,
      square: false,
      outline: false,
      size: 'md',
      isClickable: false,
      disable: false,
    },
  },
);

export type ChipVariants = VariantProps<typeof chipVariants>;
