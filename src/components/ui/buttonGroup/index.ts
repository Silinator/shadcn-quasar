import { cva, type VariantProps } from 'class-variance-authority';

export { default as ButtonGroup } from './ButtonGroup.vue';

export const buttonGroupVariants = cva(
  'relative inline-flex gap-0 whitespace-nowrap [&>*]:border-0 [&>*]:shadow-none [&>*]:active:transform-none [&>*]:active:shadow-none [&>*:not(:first-child)]:!rounded-l-none [&>*:not(:last-child)]:!rounded-r-none',
  {
    variants: {
      spread: {
        true: '[&>*]:w-auto [&>*]:max-w-full [&>*]:min-w-0 [&>*]:flex-[1000_1_0%]',
        false: '',
      },
      outline: {
        true: 'border border-current bg-transparent',
        false: '',
      },
      flat: {
        true: '',
        false: '',
      },
      unelevated: {
        true: '',
        false: '',
      },
      rounded: {
        true: 'rounded-full',
        false: 'rounded-sm',
      },
      square: {
        true: 'rounded-none',
        false: '',
      },
      push: {
        true: '[&>*]:active:pt-0.75 [&>*]:active:pb-0.25 [&>*]:active:transition-[padding_.3s_cubic-bezier(.25,.8,.5,1)]',
        false: '',
      },
      glossy: {
        true: '',
        false: '',
      },
      stretch: {
        true: 'self-stretch',
        false: '',
      },
    },
    compoundVariants: [
      {
        flat: false,
        unelevated: false,
        outline: false,
        push: false,
        class: 'shadow-md transition-shadow duration-300',
      },
    ],
    defaultVariants: {
      spread: false,
      outline: false,
      flat: false,
      unelevated: false,
      rounded: false,
      square: false,
      push: false,
      glossy: false,
      stretch: false,
    },
  },
);

export type ButtonGroupVariants = VariantProps<typeof buttonGroupVariants>;
