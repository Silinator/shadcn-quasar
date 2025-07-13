import { cva, type VariantProps } from 'class-variance-authority';

export { default as Card } from './Card.vue';
export const cardVariants = cva('relative align-top', {
  variants: {
    square: {
      true: 'rounded-none',
      false: 'rounded-sm',
    },
    flat: {
      true: '',
      false: '',
    },
    bordered: {
      true: 'border border-current/12 dark:border-current/28 [&.dark]:border-current/28',
      false: '',
    },
  },
  compoundVariants: [
    {
      flat: false,
      bordered: false,
      class: 'shadow-sm',
    },
  ],
  defaultVariants: {
    square: false,
    flat: false,
    bordered: false,
  },
});

export type CardVariants = VariantProps<typeof cardVariants>;

export { default as CardSection } from './CardSection.vue';
export const cardSectionVariants = cva('relative text-sm', {
  variants: {
    horizontal: {
      true: 'flex flex-row flex-nowrap',
      false: 'p-4',
    },
  },
  defaultVariants: {
    horizontal: false,
  },
});

export type CardSectionVariants = VariantProps<typeof cardSectionVariants>;

export { default as CardActions } from './CardActions.vue';
export const cardActionsVariants = cva('relative flex p-2 [&>Button]:px-2', {
  variants: {
    align: {
      left: '',
      center: '',
      right: '',
      between: '',
      around: '',
      evenly: '',
      stretch: '',
    },
    vertical: {
      true: 'flex-col flex-wrap',
      false: 'flex-row flex-wrap items-center gap-x-2',
    },
  },
  compoundVariants: [
    {
      align: 'left',
      vertical: false,
      class: 'justify-start',
    },
    {
      align: 'left',
      vertical: true,
      class: 'items-start',
    },
    {
      align: 'center',
      vertical: false,
      class: 'justify-center',
    },
    {
      align: 'center',
      vertical: true,
      class: 'items-center',
    },
    {
      align: 'right',
      vertical: false,
      class: 'justify-end',
    },
    {
      align: 'right',
      vertical: true,
      class: 'items-end',
    },
    {
      align: 'between',
      vertical: false,
      class: 'justify-between',
    },
    {
      align: 'between',
      vertical: true,
      class: 'items-between',
    },
    {
      align: 'around',
      vertical: false,
      class: 'justify-around',
    },
    {
      align: 'around',
      vertical: true,
      class: 'items-around',
    },
    {
      align: 'evenly',
      vertical: false,
      class: 'justify-evenly',
    },
    {
      align: 'evenly',
      vertical: true,
      class: 'items-evenly',
    },
    {
      align: 'stretch',
      vertical: false,
      class: 'justify-stretch',
    },
    {
      align: 'stretch',
      vertical: true,
      class: 'items-stretch',
    },
  ],
});

export type CardActionsVariants = VariantProps<typeof cardActionsVariants>;
